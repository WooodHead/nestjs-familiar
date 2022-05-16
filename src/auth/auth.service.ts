import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
	private prisma: PrismaService;

	constructor(prisma: PrismaService) {
		this.prisma = prisma;
	}

	async signUp(dto: AuthDto) {
		// const newUser = await this.prisma.player.findMany();
		//postSignUp
	}

	async signIn(dto: AuthDto) {
		console.log(dto);
	}

	async signOut() {
		//postSignOut
	}

	async refreshAccessToken() {
		//postRefreshAccessToken
	}
}
