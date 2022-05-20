import { IsUUID } from "class-validator";

export class GetResultByIdDTO {
	@IsUUID()
	id: string;
}
