import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddEventDTO, EditEventDTO, GetEventByIdDTO } from "./dto";
import { EventService } from "./event.service";

@Controller("events")
export class EventController {
	constructor(private eventService: EventService) {}

	@Get()
	async getAll() {
		return await this.eventService.getAll();
	}

	@Post()
	async add(@Body() body: AddEventDTO) {
		return await this.eventService.create(body);
	}

	@Get("/:id")
	async getOneById(@Param() params: GetEventByIdDTO) {
		return await this.eventService.getOneById(params);
	}

	@Put("/:id")
	async update(@Param() params: GetEventByIdDTO, @Body() body: EditEventDTO) {
		return await this.eventService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetEventByIdDTO) {
		return await this.eventService.delete(params);
	}
}
