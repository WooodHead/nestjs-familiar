import { AccountPemission } from "@prisma/client";
import { IsArray, IsEnum, IsUUID } from "class-validator";

export class AddPermissionDTO {
	@IsArray()
	@IsEnum(AccountPemission, { each: true })
	permissions: AccountPemission[];

	@IsUUID()
	accountId: string;

	@IsUUID()
	leagueId: string;
}
