import { Injectable } from "@nestjs/common";
import { EventStatus, PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddResultDTO } from "src/result/dto";
import { AddEventDTO, EditEventDTO, GetEventByIdDTO } from "./dto";

@Injectable()
export class EventService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.event.findMany({
			include: { results: { orderBy: { rank: "asc" }, take: 1 } },
		});
	}

	async getOneById(
		params: GetEventByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.event.findUnique({
			where: { id: params.id },
			include: { results: { orderBy: { rank: "asc" }, take: 1 } },
		});
	}

	async create(body: AddEventDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.event.create({
			data: {
				name: body.name,
				type: body.type,
				leagueId: body.leagueId,
				seasonId: body.seasonId,
				status: EventStatus.SCHEDULED,
			},
		});
		// return await prisma.$transaction(async (prisma) => {
		// 	// const results = await prisma.result.createMany({
		// 	// 	data: body.results.map((result: AddResultDTO) => ({
		// 	// 		eventId: event.id,
		// 	// 		userId: result.userId,
		// 	// 		deckId: result.deckId,
		// 	// 		score: result.score,
		// 	// 		rank: result.rank,

		// 	// 	})),
		// 	// });

		// 	return { event, results };
		// });
	}

	async edit(
		params: GetEventByIdDTO,
		body: EditEventDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.event.update({
			where: { id: params.id },
			data: {
				name: body.name,
				type: body.type,
			},
		});
	}

	async delete(
		params: GetEventByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.result.delete({ where: { id: params.id } });
	}
}
