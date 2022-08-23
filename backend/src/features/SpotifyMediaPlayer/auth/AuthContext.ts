import { NextApiRequest, NextApiResponse } from "next";
import { IAuthContext } from "./AuthController";

export class AuthContext implements IAuthContext {
  constructor(private readonly req: NextApiRequest, private readonly res: NextApiResponse) {
    this.req = req;
    this.res = res;
  }

  async JSON(statusCode: number, responseBody: Object) {
    this.res.status(statusCode).json(responseBody);
  }

  async redirect(url: string) {
    this.res.redirect(url);
  }
}
