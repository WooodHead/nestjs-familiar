import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddResultDTO } from "src/result/dto";
import { AddEventDTO, DeleteEventDTO, EditEventDTO } from "./dto";

@Injectable()
export class EventService {
	private prismaService: PrismaService;

	constructor(prismaService: PrismaService) {
		this.prismaService = prismaService;
	}

	async getAll() {
		return await this.prismaService.event.findMany({
			include: { results: { orderBy: { rank: "asc" }, take: 1 } },
		});
	}

	async getOneById(id: string) {
		return await this.prismaService.event.findUnique({
			where: { id },
			include: { results: { orderBy: { rank: "asc" }, take: 1 } },
		});
	}

	async create(dto: AddEventDTO) {
		return await this.prismaService.$transaction(async (prisma) => {
			const event = await prisma.event.create({
				data: {
					name: dto.name,
					type: dto.type,
					leagueId: dto.leagueId,
					seasonId: dto.seasonId,
				},
			});

			const results = await prisma.result.createMany({
				data: dto.results.map((result: AddResultDTO) => ({
					eventId: event.id,
					playerId: result.playerId,
					deckId: result.deckId,
					score: result.score,
					rank: result.rank,
				})),
			});

			return { event, results };
		});
	}

	async edit(dto: EditEventDTO) {
		throw new Error("Method not implemented.");
	}

	async delete(dto: DeleteEventDTO) {
		await this.prismaService.result.delete({ where: { id: dto.id } });
	}
}
