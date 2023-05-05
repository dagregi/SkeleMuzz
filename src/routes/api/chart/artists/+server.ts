import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const res = await fetch("https://api.deezer.com/chart/0/artists");
  return json(await res.json());
};
