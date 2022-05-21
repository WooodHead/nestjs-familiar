import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddDeckDTO, EditDeckDTO, GetDeckByIdDTO } from "./dto";

@Injectable()
export class DeckService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.deck.findMany();
	}

	async create(body: AddDeckDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.deck.create({
			data: {
				name: body.name,
				archetype: body.archetype,
				colors: body.colors,
			},
		});
	}

	async getOneById(
		params: GetDeckByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.deck.findUnique({ where: { id: params.id } });
	}

	async edit(
		params: GetDeckByIdDTO,
		body: EditDeckDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.deck.update({
			where: { id: params.id },
			data: {
				name: body.name,
				archetype: body.archetype,
				colors: body.colors,
			},
		});
	}

	async delete(
		params: GetDeckByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.deck.delete({
			where: { id: params.id },
		});
	}
}
