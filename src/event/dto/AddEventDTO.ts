import { EventType } from "@prisma/client";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import { ResultDTO } from "src/result/dto";

export class AddEventDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	type: EventType;

	@IsUUID()
	leagueId: string;

	@IsUUID()
	seasonId: string;

	results: ResultDTO[];
}
