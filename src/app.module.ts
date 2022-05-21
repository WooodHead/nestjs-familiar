import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UserModule } from "./user/user.module";
import { EventController } from "./event/event.controller";
import { EventService } from "./event/event.service";
import { EventModule } from "./event/event.module";
import { ResultModule } from "./result/result.module";
import { ResultService } from "./result/result.service";
import { DeckService } from "./deck/deck.service";
import { DeckModule } from "./deck/deck.module";
import { AccountModule } from "./account/account.module";
import { PermissionModule } from "./permission/permission.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SeasonModule } from './season/season.module';
import { LeagueModule } from './league/league.module';

@Module({
	imports: [
		AuthModule,
		PrismaModule,
		UserModule,
		EventModule,
		ResultModule,
		DeckModule,
		AccountModule,
		PermissionModule,
		SubscriptionModule,
		SeasonModule,
		LeagueModule,
	],
	controllers: [AppController, EventController],
	providers: [AppService, EventService, ResultService, DeckService],
})
export class AppModule {}
