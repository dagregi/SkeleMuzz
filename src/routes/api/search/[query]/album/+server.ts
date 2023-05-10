import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, fetch }) => {
  const { query } = params;
  const response = await fetch(
    `https://api.deezer.com/search/album?q=${query}`
  );
  return json(await response.json());
};
