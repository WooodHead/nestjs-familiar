import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from "@nestjs/common";
import {
	AddPermissionDTO,
	EditPermissionDTO,
	GetPermissionByIdDTO,
} from "./dto";
import { PermissionService } from "./permission.service";

@Controller("permission")
export class PermissionController {
	constructor(private permissionService: PermissionService) {}

	@Post()
	async add(@Body() body: AddPermissionDTO) {
		return await this.permissionService.create(body);
	}

	@Get()
	async getAll() {
		return await this.permissionService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetPermissionByIdDTO) {
		return await this.permissionService.getOneById(params);
	}

	@Put("/:id")
	async edit(
		@Param() params: GetPermissionByIdDTO,
		@Body() body: EditPermissionDTO
	) {
		return await this.permissionService.edit(params, body);
	}

	@Delete("/:id")
	async delete(@Param() params: GetPermissionByIdDTO) {
		return await this.permissionService.delete(params);
	}
}
