import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, fetch, setHeaders }) => {
  setHeaders({
    "cache-control": "max-age=600",
  });
  const { id } = params;
  const response = await fetch(
    `https://api.deezer.com/artist/${id}/albums?limit=12`
  );
  return json(await response.json());
};
