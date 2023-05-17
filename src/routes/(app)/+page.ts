import type { ArtistResponse, PlaylistResponse } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, setHeaders }) => {
  setHeaders({
    "cache-control": "max-age=600",
  });
  const getPlaylists = async () => {
    try {
      const response = await fetch("/api/chart/playlists");
      if (!response.ok) throw new Error("Request timeout");
      const data = (await response.json()) as PlaylistResponse;
      return data;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  const getTopArtists = async () => {
    try {
      const response = await fetch("/api/chart/artists");
      if (!response.ok) throw new Error("Request timeout");
      const data = (await response.json()) as ArtistResponse;
      return data;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  return {
    lazy: {
      playlists: getPlaylists(),
      topArtists: getTopArtists(),
    },
  };
};
