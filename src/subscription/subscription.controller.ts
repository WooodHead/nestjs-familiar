import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AddSubscriptionDTO, GetSubscriptionByIdDTO } from "./dto";
import { SubscriptionService } from "./subscription.service";

@Controller("subscription")
export class SubscriptionController {
	constructor(private subscriptionService: SubscriptionService) {}

	@Post()
	async add(@Body() body: AddSubscriptionDTO) {
		return await this.subscriptionService.create(body);
	}

	@Get()
	async getAll() {
		return await this.subscriptionService.getAll();
	}

	@Get("/:id")
	async getOneById(@Param() params: GetSubscriptionByIdDTO) {
		return await this.subscriptionService.getOneById(params);
	}

	@Delete("/:id")
	async delete(@Param() params: GetSubscriptionByIdDTO) {
		return await this.subscriptionService.delete(params);
	}
}
