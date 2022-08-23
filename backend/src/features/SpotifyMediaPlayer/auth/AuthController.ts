import { AuthService } from "./AuthService";
import { createSpotifyOAuthURL } from "./util";

export interface IAuthContext {
  JSON: (statusCode: number, response: Object) => void;
  redirect: (url: string) => void;
}

export interface IAuthController {
  login: (context: IAuthContext) => Promise<void>;
}

export class AuthController implements IAuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  async login(context: IAuthContext) {
    const { state, authenticationScope } = await this.authService.login();
    context.redirect(
      createSpotifyOAuthURL({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID || "",
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI || "",
        scope: authenticationScope,
        state,
      })
    );
    // throw new Error("Method not implemented.");
  }
}
