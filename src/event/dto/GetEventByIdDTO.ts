import { IsUUID } from "class-validator";

export class GetEventByIdDTO {
	@IsUUID()
	id: string;
}
