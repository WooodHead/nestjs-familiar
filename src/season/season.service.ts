import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddSeasonDTO, EditSeasonDTO, GetSeasonByIdDTO } from "./dto";

@Injectable()
export class SeasonService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.season.findMany();
	}

	async create(body: AddSeasonDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.season.create({
			data: {
				name: body.name,
				endsAt: body.endsAt,
			},
		});
	}

	async getOneById(
		params: GetSeasonByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.season.findUnique({ where: { id: params.id } });
	}

	async edit(
		params: GetSeasonByIdDTO,
		body: EditSeasonDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.season.update({
			where: { id: params.id },
			data: {
				name: body.name,
				endsAt: body.endsAt,
			},
		});
	}

	async delete(
		params: GetSeasonByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.season.delete({
			where: { id: params.id },
		});
	}
}
