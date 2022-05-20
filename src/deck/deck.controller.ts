import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { DeckService } from "./deck.service";
import { AddDeckDTO, DeleteDeckDTO, EditDeckDTO, GetDeckByIdDTO } from "./dto";

@Controller("deck")
export class DeckController {
	private eventService: DeckService;

	constructor(eventService: DeckService) {
		this.eventService = eventService;
	}

	@Get()
	async getAll() {
		return await this.eventService.getAll();
	}

	@Get("/:id")
	async getOneById(@Body() dto: GetDeckByIdDTO) {
		return await this.eventService.getOneById(dto);
	}

	@Post()
	async add(@Body() dto: AddDeckDTO) {
		return await this.eventService.create(dto);
	}

	@Put()
	async update(@Body() dto: EditDeckDTO) {
		return await this.eventService.edit(dto);
	}

	@Delete()
	async delete(@Body() dto: DeleteDeckDTO) {
		return await this.eventService.delete(dto);
	}
}
