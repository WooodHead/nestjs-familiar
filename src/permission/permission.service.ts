import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import {
	AddPermissionDTO,
	EditPermissionDTO,
	GetPermissionByIdDTO,
} from "./dto";

@Injectable()
export class PermissionService {
	constructor(private prismaService: PrismaService) {}

	async getAll(prisma: PrismaClient = this.prismaService) {
		return await prisma.permission.findMany();
	}

	async create(
		body: AddPermissionDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.permission.create({
			data: {
				accountId: body.accountId,
				leagueId: body.leagueId,
				permissions: body.permissions,
			},
		});
	}

	async getOneById(
		params: GetPermissionByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.permission.findUnique({ where: { id: params.id } });
	}

	async edit(
		params: GetPermissionByIdDTO,
		body: EditPermissionDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.permission.update({
			where: { id: params.id },
			data: {
				permissions: body.permissions,
			},
		});
	}

	async delete(
		params: GetPermissionByIdDTO,
		prisma: PrismaClient = this.prismaService
	) {
		return await prisma.permission.delete({
			where: { id: params.id },
		});
	}
}
