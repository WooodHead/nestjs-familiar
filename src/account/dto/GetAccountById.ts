import { IsUUID } from "class-validator";

export class GetAccountByIdDTO {
	@IsUUID()
	id: string;
}
