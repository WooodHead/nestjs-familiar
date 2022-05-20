import { IsUUID } from "class-validator";

export class GetPlayerByIdDTO {
	@IsUUID()
	id: string;
}
