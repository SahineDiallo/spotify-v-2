import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "streaming",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read",
  "playlist-read-private",
  "playlist-read-collaborative",
].join(",");

const baseUrl = "https://accounts.spotify.com/authorize?";

const params = {
  scopes,
};

const urlparams = new URLSearchParams(params);
export const LOGIN_URL = `${baseUrl}${urlparams.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_PUBLIC_KEY,
  clientSecret: process.env.SPOTIFY_SECRET_KEY,
});

export default spotifyApi; 
