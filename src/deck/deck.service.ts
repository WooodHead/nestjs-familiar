import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddDeckDTO, DeleteDeckDTO, EditDeckDTO } from "./dto";

@Injectable()
export class DeckService {
	private prismaService: PrismaService;

	constructor(prismaService: PrismaService) {
		this.prismaService = prismaService;
	}

	async getAll() {
		return await this.prismaService.deck.findMany();
	}

	async getOneById(id: string) {
		return await this.prismaService.deck.findUnique({ where: { id } });
	}

	async create(dto: AddDeckDTO) {
		return await this.prismaService.deck.create({
			data: {
				name: dto.name,
				archetype: dto.archetype,
				colors: dto.colors,
			},
		});
	}

	async edit(dto: EditDeckDTO) {
		return await this.prismaService.deck.update({
			where: { id: dto.id },
			data: {
				name: dto.name,
				archetype: dto.archetype,
				colors: dto.colors,
			},
		});
	}

	async delete(dto: DeleteDeckDTO) {
		return await this.prismaService.deck.delete({
			where: { id: dto.id },
		});
	}
}
