import { Archetype, Color } from "@prisma/client";
import {
	IsArray,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
} from "class-validator";

export class AddDeckDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	@IsEnum(Archetype)
	archetype: Archetype;

	@IsOptional()
	@IsArray()
	@IsEnum(Color, { each: true })
	colors: Color[];
}
