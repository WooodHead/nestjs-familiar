import { IsUUID } from "class-validator";

export class GetSeasonByIdDTO {
	@IsUUID()
	id: string;
}
