import { Archetype, Color } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class AddDeckDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	archetype: Archetype;

	@IsString()
	@IsNotEmpty()
	colors: Color[];
}
