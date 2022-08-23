import { AuthController } from "./AuthController";
import { AuthService } from "./AuthService";

const authService = new AuthService();
export const authController = new AuthController(authService);
