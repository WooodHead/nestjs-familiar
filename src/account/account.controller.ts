import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import { AccountService } from "./account.service";
import { AddAccountDTO, EditAccountDTO, GetAccountByIdDTO } from "./dto";

@Controller("accounts")
export class AccountController {
	constructor(private accountService: AccountService) {}

	@Post()
	async add(@Body() params: AddAccountDTO) {
		return await this.accountService.create(params);
	}

	@Get()
	async getAll() {
		return await this.accountService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetAccountByIdDTO) {
		return await this.accountService.getOneById(params);
	}

	@Put("/:id")
	async edit(@Param() params: GetAccountByIdDTO, @Body() body: EditAccountDTO) {
		return await this.accountService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetAccountByIdDTO) {
		return await this.accountService.delete(params);
	}
}
