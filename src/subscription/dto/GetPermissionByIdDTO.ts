import { IsUUID } from "class-validator";

export class GetSubscriptionByIdDTO {
	@IsUUID()
	id: string;
}
