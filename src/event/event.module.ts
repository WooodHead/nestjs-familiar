import { Module } from "@nestjs/common";
import { ResultModule } from "src/result/result.module";
import { ResultService } from "src/result/result.service";
import { EventController } from "./event.controller";
import { EventService } from "./event.service";

@Module({
	controllers: [EventController],
	providers: [EventService],
})
export class EventModule {}
