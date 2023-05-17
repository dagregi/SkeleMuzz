import type { Playlist } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const { id } = params;
  const getPlaylist = async () => {
    try {
      const response = await fetch(`/api/playlist/${id}`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as Playlist;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  return {
    playlist: getPlaylist(),
  };
};
