import { IsInt, IsNumber, IsUUID } from "class-validator";

export class ResultDTO {
	@IsUUID()
	playerId: string;

	@IsUUID()
	evnetId: string;

	@IsUUID()
	deckId: string;

	@IsNumber()
	score: number;

	@IsInt()
	rank: number;
}
