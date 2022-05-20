import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import {
	AddPlayerDTO,
	DeletePlayerDTO,
	EditPlayerDTO,
	GetPlayerByIdDTO,
	GetPlayerResultsDTO,
} from "./dto";
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
	async getOneById(@Body() dto: GetPlayerByIdDTO) {
		return await this.playerService.getOneById(dto);
	}

	@Get("/:id/results")
	async getPlayerResults(@Body() dto: GetPlayerResultsDTO) {
		return await this.playerService.getPlayerResults(dto);
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
