import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class AddLeagueDTO {
	@IsString()
	@IsNotEmpty()
	@Transform(({ value }) => value.toUpperCase())
	tag: string;

	@IsString()
	@IsNotEmpty()
	name: string;
}
