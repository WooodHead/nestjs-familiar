import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
	private authService: AuthService;

	constructor(authService: AuthService) {
		this.authService = authService;
	}

	// @Post("sign-up")
	// async postSignUp(dto: AuthDto) {
	// 	return await this.authService.signUp(dto);
	// }

	@Post("sign-in")
	async postSignIn(@Body() dto: AuthDto) {
		await this.authService.signIn(dto);
	}

	@Post("sign-out")
	async postSignOut() {
		await this.authService.signOut();
	}

	@Post("refresh")
	async postRefreshAccessToken() {
		await this.authService.refreshAccessToken();
	}
}
