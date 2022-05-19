import { IsInt, IsNumber, IsPositive, IsUUID } from "class-validator";

export class EditResultDTO {
	@IsUUID()
	id: string;

	@IsUUID()
	playerId: string;

	@IsUUID()
	eventId: string;

	@IsUUID()
	deckId: string;

	@IsPositive()
	@IsInt()
	score: number;

	@IsInt()
	rank: number;
}
