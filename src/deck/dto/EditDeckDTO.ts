import { Archetype, Color } from "@prisma/client";
import {
	IsArray,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
} from "class-validator";

export class EditDeckDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsOptional()
	@IsNotEmpty()
	@IsEnum(Archetype)
	archetype: Archetype;

	@IsOptional()
	@IsArray()
	@IsEnum(Color, { each: true })
	colors: Color[];
}
