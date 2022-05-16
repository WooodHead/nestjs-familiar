import { IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
	@IsString()
	@IsNotEmpty()
	tag: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}
