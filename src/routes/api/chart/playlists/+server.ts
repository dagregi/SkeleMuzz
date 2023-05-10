import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ fetch }) => {
  const res = await fetch("https://api.deezer.com/chart/0/playlists");
  return json(await res.json());
};
