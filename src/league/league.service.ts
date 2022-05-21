import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddLeagueDTO, EditLeagueDTO, GetLeagueByIdDTO } from "./dto";

@Injectable()
export class LeagueService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.league.findMany();
	}

	async create(body: AddLeagueDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.league.create({
			data: {
				tag: body.tag,
				name: body.name,
			},
		});
	}

	async getOneById(
		params: GetLeagueByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.league.findUnique({ where: { id: params.id } });
	}

	async edit(
		params: GetLeagueByIdDTO,
		body: EditLeagueDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.league.update({
			where: { id: params.id },
			data: {
				tag: body.tag,
				name: body.name,
			},
		});
	}

	async delete(
		params: GetLeagueByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.league.delete({
			where: { id: params.id },
		});
	}
}
