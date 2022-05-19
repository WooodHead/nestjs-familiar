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
import { AddResultDTO, DeleteResultDTO, EditResultDTO } from "./dto";
import { ResultService } from "./result.service";

@Injectable()
@Controller("results")
export class ResultController {
	private resultService: ResultService;

	constructor(resultService: ResultService) {
		this.resultService = resultService;
	}

	@Get()
	async getAll() {
		return await this.resultService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param("id") id: string) {
		return await this.resultService.getOneById(id);
	}

	@Post()
	async add(@Body() dto: AddResultDTO) {
		return await this.resultService.create(dto);
	}

	@Put()
	async update(@Body() dto: EditResultDTO) {
		return await this.resultService.edit(dto);
	}

	@Delete()
	async delete(@Body() dto: DeleteResultDTO) {
		return await this.resultService.delete(dto);
	}
}