import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditSeasonDTO {
	@IsOptional()
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsOptional()
	@IsDate()
	endsAt: Date;
}
