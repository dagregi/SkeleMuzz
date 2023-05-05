import type { Playlist } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const getPlaylist = async () => {
    const { id } = params;
    const response = await fetch(`/api/playlist/${id}`);
    const data = await response.json();
    return data as Playlist;
  };

  return {
    playlist: getPlaylist(),
  };
};
