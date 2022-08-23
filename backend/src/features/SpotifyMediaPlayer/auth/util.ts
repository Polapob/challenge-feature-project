import qs from "qs";
import { SpotifyOAuthParams } from "./type";

export const generateRandomString = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};
export const createSpotifyOAuthURL = (params: SpotifyOAuthParams) => {
  return "https://accounts.spotify.com/authorize?" + qs.stringify(params);
};
