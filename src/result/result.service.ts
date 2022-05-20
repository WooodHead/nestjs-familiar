import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import {
	AddResultDTO,
	DeleteResultDTO,
	EditResultDTO,
	GetResultByIdDTO,
} from "./dto";

@Injectable()
export class ResultService {
	private prismaService: PrismaService;

	constructor(prismaService: PrismaService) {
		this.prismaService = prismaService;
	}

	async getAll() {
		return await this.prismaService.result.findMany();
	}

	async getOneById(dto: GetResultByIdDTO) {
		return await this.prismaService.result.findUnique({
			where: { id: dto.id },
		});
	}

	async create(dto: AddResultDTO) {
		return await this.prismaService.result.create({
			data: {
				eventId: dto.eventId,
				playerId: dto.playerId,
				deckId: dto.deckId,
				score: dto.score,
				rank: dto.rank,
			},
		});
	}

	async edit(dto: EditResultDTO) {
		return await this.prismaService.result.update({
			where: { id: dto.id },
			data: {
				eventId: dto.eventId,
				playerId: dto.playerId,
				deckId: dto.deckId,
				score: dto.score,
				rank: dto.rank,
			},
		});
	}

	async delete(dto: DeleteResultDTO) {
		return await this.prismaService.result.delete({
			where: { id: dto.id },
		});
	}
}
