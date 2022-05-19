import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { PlayerModule } from "./player/player.module";
import { EventController } from "./event/event.controller";
import { EventService } from "./event/event.service";
import { EventModule } from "./event/event.module";
import { ResultModule } from "./result/result.module";
import { ResultService } from "./result/result.service";
import { DeckService } from './deck/deck.service';
import { DeckModule } from './deck/deck.module';

@Module({
	imports: [AuthModule, PrismaModule, PlayerModule, EventModule, ResultModule, DeckModule],
	controllers: [AppController, EventController],
	providers: [AppService, EventService, ResultService, DeckService],
})
export class AppModule {}
