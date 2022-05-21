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
import { AddDeckDTO, EditDeckDTO, GetDeckByIdDTO } from "./dto";

@Controller("decks")
export class DeckController {
	constructor(private deckService: DeckService) {}

	@Post()
	async add(@Body() body: AddDeckDTO) {
		return await this.deckService.create(body);
	}

	@Get()
	async getAll() {
		return await this.deckService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetDeckByIdDTO) {
		return await this.deckService.getOneById(params);
	}

	@Put("/:id")
	async edit(@Param() params: GetDeckByIdDTO, @Body() body: EditDeckDTO) {
		return await this.deckService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetDeckByIdDTO) {
		return await this.deckService.delete(params);
	}
}
