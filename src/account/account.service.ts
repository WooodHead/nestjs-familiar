import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddAccountDTO, EditAccountDTO, GetAccountByIdDTO } from "./dto";

@Injectable()
export class AccountService {
	constructor(private prismaService: PrismaService) {}

	async create(body: AddAccountDTO, prisma: PrismaClient = this.prismaService) {
		return await prisma.account.create({
			data: {
				userId: body.userId,
				password: body.password,
				role: body.role,
			},
		});
	}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.account.findMany();
	}

	async getOneById(
		params: GetAccountByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.account.findUnique({ where: { id: params.id } });
	}

	async edit(
		params: GetAccountByIdDTO,
		body: EditAccountDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.account.update({
			where: { id: params.id },
			data: {
				password: body.password,
				role: body.role,
				refreshToken: body.refreshToken,
			},
		});
	}

	async delete(
		params: GetAccountByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.account.delete({
			where: { id: params.id },
		});
	}
}
