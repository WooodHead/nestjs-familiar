import { IsUUID } from "class-validator";

export class DeletePlayerDTO {
	@IsUUID()
	id: string;
}
