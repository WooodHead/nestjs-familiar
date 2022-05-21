import { IsUUID } from "class-validator";

export class GetPermissionByIdDTO {
	@IsUUID()
	id: string;
}
