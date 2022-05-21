import { EventStatus, EventType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditEventDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsOptional()
	@IsEnum(EventType)
	type: EventType;

	@IsOptional()
	@IsEnum(EventStatus)
	status: EventStatus;
}
