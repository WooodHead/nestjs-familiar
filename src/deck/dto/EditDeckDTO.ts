import { Archetype, Color } from "@prisma/client";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class EditDeckDTO {
	@IsUUID()
	id: string;

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
