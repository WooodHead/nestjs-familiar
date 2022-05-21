import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddResultDTO, EditResultDTO, GetResultByIdDTO } from "./dto";

@Injectable()
export class ResultService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.result.findMany();
	}

	async getOneById(
		params: GetResultByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.result.findUnique({
			where: { id: params.id },
		});
	}

	async create(body: AddResultDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.result.create({
			data: {
				eventId: body.eventId,
				userId: body.userId,
				deckId: body.deckId,
				score: body.score,
				rank: body.rank,
			},
		});
	}

	async edit(
		params: GetResultByIdDTO,
		body: EditResultDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.result.update({
			where: { id: params.id },
			data: {
				deckId: body.deckId,
				score: body.score,
				rank: body.rank,
			},
		});
	}

	async delete(
		params: GetResultByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.result.delete({
			where: { id: params.id },
		});
	}
}
