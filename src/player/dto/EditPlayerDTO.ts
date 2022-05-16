import { Transform } from "class-transformer";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { sanitizeName } from "src/utils";

export class EditPlayerDTO {
	@IsUUID()
	id: string;

	@IsOptional()
	@IsString()
	@Transform((param) => sanitizeName(param.value))
	firstName: string;

	@IsOptional()
	@IsString()
	@Transform((param) => sanitizeName(param.value))
	lastName: string;

	@IsOptional()
	@IsString()
	username: string;
}
