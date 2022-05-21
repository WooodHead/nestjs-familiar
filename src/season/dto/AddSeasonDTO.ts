import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class AddSeasonDTO {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsDate()
	endsAt: Date;
}
