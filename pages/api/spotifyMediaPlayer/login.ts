import { NextApiRequest, NextApiResponse } from "next";
import { authRouter } from "../../../backend/src/features/SpotifyMediaPlayer/auth/AuthRouter";
import { authController } from "../../../backend/src/features/SpotifyMediaPlayer/auth/main";

enum RequestMethodTypes {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === RequestMethodTypes.GET) {
    console.log("env =", process.env.SPOTIFY_CLIENT_ID);
    console.log("pass-this");
    await authRouter.login(req, res);
    //res.status(200).json({ success: "success" });
    console.log("pass-this");
  } else {
    res.status(404).json({ status: "not-found" });
  }
}
