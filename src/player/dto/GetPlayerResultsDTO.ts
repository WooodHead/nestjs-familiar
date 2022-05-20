import { IsUUID } from "class-validator";

export class GetPlayerResultsDTO {
	@IsUUID()
	id: string;
}
