import { AccountPemission } from "@prisma/client";
import { IsArray, IsEnum, IsOptional } from "class-validator";

export class EditPermissionDTO {
	@IsOptional()
	@IsArray()
	@IsEnum(AccountPemission, { each: true })
	permissions: AccountPemission[];
}
