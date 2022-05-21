import {
	Body,
	Controller,
	Delete,
	Get,
	Injectable,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddResultDTO, EditResultDTO, GetResultByIdDTO } from "./dto";
import { ResultService } from "./result.service";

@Injectable()
@Controller("results")
export class ResultController {
	constructor(private resultService: ResultService) {}

	@Post()
	async add(@Body() body: AddResultDTO) {
		return await this.resultService.create(body);
	}

	@Get()
	async getAll() {
		return await this.resultService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetResultByIdDTO) {
		return await this.resultService.getOneById(params);
	}

	@Put("/:id")
	async update(@Param() params: GetResultByIdDTO, @Body() body: EditResultDTO) {
		return await this.resultService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetResultByIdDTO) {
		return await this.resultService.delete(params);
	}
}
