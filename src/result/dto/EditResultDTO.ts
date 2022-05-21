import { IsInt, IsPositive, IsUUID } from "class-validator";

export class EditResultDTO {
	@IsUUID()
	deckId: string;

	@IsPositive()
	@IsInt()
	score: number;

	@IsInt()
	rank: number;
}
