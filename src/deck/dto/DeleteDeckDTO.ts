import { IsUUID } from "class-validator";

export class DeleteDeckDTO {
	@IsUUID()
	id: string;
}
