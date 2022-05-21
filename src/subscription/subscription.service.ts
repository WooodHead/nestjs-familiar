import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddSubscriptionDTO, GetSubscriptionByIdDTO } from "./dto";

@Injectable()
export class SubscriptionService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.subscription.findMany();
	}

	async getOneById(
		params: GetSubscriptionByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.subscription.findUnique({
			where: { id: params.id },
		});
	}

	async create(
		body: AddSubscriptionDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.subscription.create({
			data: {
				userId: body.userId,
				leagueId: body.leagueId,
			},
		});
	}

	async delete(
		params: GetSubscriptionByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.subscription.delete({
			where: { id: params.id },
		});
	}
}
