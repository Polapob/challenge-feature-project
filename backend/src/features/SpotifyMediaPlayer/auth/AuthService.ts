import { generateRandomString } from "./util";

export class AuthService {
  async login() {
    const state = generateRandomString(16);
    const authenticationScope = "user-read-private user-read-email";
    return { state, authenticationScope };
  }
}
