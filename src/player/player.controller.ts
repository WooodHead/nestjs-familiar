import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
} from "@nestjs/common";
import { AddPlayerDTO, DeletePlayerDTO, EditPlayerDTO } from "./dto";
import { PlayerService } from "./player.service";

@Controller("players")
export class PlayerController {
	private playerService: PlayerService;

	constructor(playerService: PlayerService) {
		this.playerService = playerService;
	}

	@Get()
	async getAll() {
		return await this.playerService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param("id") id: string) {
		return await this.playerService.getOneById(id);
	}

	@Get("/:id/events")
	async getPlayerEvents(@Param("id") id: string) {
		return await this.playerService.getPlayerResults(id);
	}

	@Post()
	async add(@Body() dto: AddPlayerDTO) {
		return await this.playerService.create(dto);
	}

	@Put()
	async update(@Body() dto: EditPlayerDTO) {
		return await this.playerService.edit(dto);
	}

	@Delete()
	async delete(@Body() dto: DeletePlayerDTO) {
		return await this.playerService.delete(dto);
	}
}
