import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddPlayerDTO, DeletePlayerDTO, EditPlayerDTO } from "./dto";

@Injectable()
export class PlayerService {
	private prisma: PrismaService;

	constructor(prisma: PrismaService) {
		this.prisma = prisma;
	}

	async getAll() {
		return await this.prisma.player.findMany();
	}

	async getOneById(id: string) {
		return this.prisma.player.findUnique({ where: { id } });
	}

	async getPlayerResults(id: string) {
		return this.prisma.result.findMany({
			where: { playerId: id },
			include: {
				Event: {},
			},
		});
	}

	async create(dto: AddPlayerDTO) {
		let username = (dto.firstName.charAt(0) + "." + dto.lastName)
			.toLocaleLowerCase()
			.replace(/\s+/g, "");

		const homonymousPlayers = await this.prisma.player.findMany({
			where: {
				username: { startsWith: username },
			},
		});

		if (homonymousPlayers.length > 0) {
			const indexes = homonymousPlayers
				.map(({ username }) => username.split(".")?.[2])
				.filter((index) => index)
				.map((index) => parseInt(index));

			const index = Math.max(...indexes, 0) + 1;

			username = username + "." + index;
		}

		return this.prisma.player.create({
			data: {
				firstName: dto.firstName,
				lastName: dto.lastName,
				username: username,
			},
		});
	}

	async edit(dto: EditPlayerDTO) {
		return this.prisma.player.update({
			data: {
				firstName: dto.firstName,
				lastName: dto.lastName,
				username: dto.username,
			},
			where: {
				id: dto.id,
			},
		});
	}

	async delete(dto: DeletePlayerDTO) {
		return this.prisma.player.delete({
			where: {
				id: dto.id,
			},
		});
	}
}
