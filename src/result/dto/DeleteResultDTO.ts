import { IsUUID } from "class-validator";

export class DeleteResultDTO {
	@IsUUID()
	id: string;
}
