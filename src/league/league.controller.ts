import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddLeagueDTO, EditLeagueDTO, GetLeagueByIdDTO } from "./dto";
import { LeagueService } from "./league.service";

@Controller("league")
export class LeagueController {
	constructor(private leagueService: LeagueService) {}

	@Post()
	async add(@Body() body: AddLeagueDTO) {
		return await this.leagueService.create(body);
	}

	@Get()
	async getAll() {
		return await this.leagueService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetLeagueByIdDTO) {
		return await this.leagueService.getOneById(params);
	}

	@Put("/:id")
	async edit(@Param() params: GetLeagueByIdDTO, @Body() body: EditLeagueDTO) {
		return await this.leagueService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetLeagueByIdDTO) {
		return await this.leagueService.delete(params);
	}
}
