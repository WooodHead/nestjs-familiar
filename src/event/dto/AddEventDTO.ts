import { EventType } from "@prisma/client";
import { Type } from "class-transformer";
import {
	IsArray,
	IsEnum,
	IsNotEmpty,
	IsString,
	IsUUID,
	MinLength,
	ValidateNested,
} from "class-validator";
import { AddResultDTO } from "src/result/dto";

export class AddEventDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsEnum(EventType)
	type: EventType;

	@IsUUID()
	leagueId: string;

	@IsUUID()
	seasonId: string;
}
