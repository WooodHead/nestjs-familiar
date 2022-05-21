import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AddUserDTO, EditUserDTO, GetUserByIdDTO } from "./dto";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
	constructor(private playerService: UserService) {}

	@Post()
	async add(@Body() body: AddUserDTO) {
		return await this.playerService.create(body);
	}

	@Get()
	async getAll() {
		return await this.playerService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetUserByIdDTO) {
		return await this.playerService.getOneById(params);
	}

	@Get("/:id/results")
	async getUserResults(@Param() params: GetUserByIdDTO) {
		return await this.playerService.getUserResults(params);
	}

	@Put("/:id")
	async edit(@Param() params: GetUserByIdDTO, @Body() body: EditUserDTO) {
		return await this.playerService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetUserByIdDTO) {
		return await this.playerService.delete(params);
	}
}
