import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddEventDTO, DeleteEventDTO, EditEventDTO } from "./dto";
import { EventService } from "./event.service";

@Controller("events")
export class EventController {
	private eventService: EventService;

	constructor(eventService: EventService) {
		this.eventService = eventService;
	}

	@Get()
	async getAll() {
		return await this.eventService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param("id") id: string) {
		return await this.eventService.getOneById(id);
	}

	@Post()
	async add(@Body() dto: AddEventDTO) {
		return await this.eventService.create(dto);
	}

	@Put()
	async update(@Body() dto: EditEventDTO) {
		return await this.eventService.edit(dto);
	}

	@Delete()
	async delete(@Body() dto: DeleteEventDTO) {
		return await this.eventService.delete(dto);
	}
}
