import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddSeasonDTO, EditSeasonDTO, GetSeasonByIdDTO } from "./dto";
import { SeasonService } from "./season.service";

@Controller("seasons")
export class SeasonController {
	constructor(private seasonService: SeasonService) {}

	@Post()
	async add(@Body() body: AddSeasonDTO) {
		return await this.seasonService.create(body);
	}

	@Get()
	async getAll() {
		return await this.seasonService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetSeasonByIdDTO) {
		return await this.seasonService.getOneById(params);
	}

	@Put("/:id")
	async edit(@Param() params: GetSeasonByIdDTO, @Body() body: EditSeasonDTO) {
		return await this.seasonService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetSeasonByIdDTO) {
		return await this.seasonService.delete(params);
	}
}
