import { IsUUID } from "class-validator";

export class GetLeagueByIdDTO {
	@IsUUID()
	id: string;
}
