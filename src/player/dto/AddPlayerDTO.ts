import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { sanitizeName } from "src/utils";

export class AddPlayerDTO {
	@IsString()
	@IsNotEmpty()
	@Transform((param) => sanitizeName(param.value))
	firstName: string;

	@IsString()
	@IsNotEmpty()
	@Transform((param) => sanitizeName(param.value))
	lastName: string;
}
