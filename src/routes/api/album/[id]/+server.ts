import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, fetch }) => {
  const { id } = params;
  const response = await fetch(`https://api.deezer.com/album/${id}`);
  return json(await response.json());
};
