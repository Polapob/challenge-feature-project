import { NextApiRequest, NextApiResponse } from "next";
import { AuthContext } from "./AuthContext";
import { AuthController } from "./AuthController";
import { AuthService } from "./AuthService";
import { authController } from "./main";

interface IAuthRouter {
  login: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

class AuthRouter implements IAuthRouter {
  constructor(private readonly authController: AuthController) {
    this.authController = authController;
  }
  async login(req: NextApiRequest, res: NextApiResponse<any>) {
    const loginContext = new AuthContext(req, res);
    return await this.authController.login(loginContext);
  }
}

export const authRouter = new AuthRouter(authController);
