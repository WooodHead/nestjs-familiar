import { IsUUID } from "class-validator";

export class GetDeckByIdDTO {
	@IsUUID()
	id: string;
}
