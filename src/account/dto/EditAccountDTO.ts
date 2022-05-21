import { UserRole } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditAccountDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	password: string;

	@IsOptional()
	@IsEnum(UserRole)
	role: UserRole;

	@IsOptional()
	@IsString()
	refreshToken: string;
}
