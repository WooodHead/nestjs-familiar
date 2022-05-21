import { UserRole } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class AddAccountDTO {
	@IsUUID()
	userId: string;

	@IsString()
	@IsNotEmpty()
	password: string;

	@IsEnum(UserRole)
	role: UserRole;
}
