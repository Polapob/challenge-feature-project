export type SpotifyOAuthParams = {
  response_type: "code";
  client_id: string;
  scope: string;
  redirect_uri: string;
  state: string;
};
