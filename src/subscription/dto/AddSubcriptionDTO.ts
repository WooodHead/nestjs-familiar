import { IsUUID } from "class-validator";

export class AddSubscriptionDTO {
	@IsUUID()
	userId: string;

	@IsUUID()
	leagueId: string;
}
