import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditLeagueDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.toUpperCase())
	tag: string;

	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name: string;
}
