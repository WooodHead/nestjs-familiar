import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AddUserDTO, EditUserDTO, GetUserByIdDTO } from "./dto";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async create(body: AddUserDTO, prisma: PrismaClient = this.prisma) {
		let username = (body.firstName.charAt(0) + "." + body.lastName)
			.toLocaleLowerCase()
			.replace(/\s+/g, "");

		const homonymousUsers = await prisma.user.findMany({
			where: { username: { startsWith: username } },
		});

		if (homonymousUsers.length > 0) {
			const indexes = homonymousUsers
				.map(({ username }) => username.split(".")?.[2])
				.filter((index) => index)
				.map((index) => parseInt(index));

			const index = Math.max(...indexes, 0) + 1;

			username = username + "." + index;
		}

		return await prisma.user.create({
			data: {
				firstName: body.firstName,
				lastName: body.lastName,
				username: username,
			},
		});
	}

	async getAll(prisma: PrismaClient = this.prisma) {
		return await prisma.user.findMany();
	}

	async getOneById(params: GetUserByIdDTO, prisma: PrismaClient = this.prisma) {
		return await prisma.user.findUnique({ where: { id: params.id } });
	}

	async getUserResults(
		params: GetUserByIdDTO,
		prisma: PrismaClient = this.prisma
	) {
		return await prisma.user.findMany({
			where: { id: params.id },
			include: { results: { include: { Event: true, Deck: true } } },
		});
	}

	async edit(
		params: GetUserByIdDTO,
		dto: EditUserDTO,
		prisma: PrismaClient = this.prisma
	) {
		return await prisma.user.update({
			where: { id: params.id },
			data: {
				firstName: dto.firstName,
				lastName: dto.lastName,
				username: dto.username,
			},
		});
	}

	async delete(params: GetUserByIdDTO, prisma: PrismaClient = this.prisma) {
		return await prisma.user.delete({
			where: { id: params.id },
		});
	}
}
