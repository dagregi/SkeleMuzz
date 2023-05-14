import type { ArtistResponse, PlaylistResponse } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, setHeaders }) => {
  setHeaders({
    "cache-control": "max-age=600",
  });
  const getPlaylists = async () => {
    const response = await fetch("/api/chart/playlists");
    if (!response.ok) return [];
    const data = (await response.json()) as PlaylistResponse;
    return data;
  };

  const getTopArtists = async () => {
    const response = await fetch("/api/chart/artists");
    if (!response.ok) return [];
    const data = (await response.json()) as ArtistResponse;
    return data;
  };

  return {
    lazy: {
      playlists: getPlaylists(),
      topArtists: getTopArtists(),
    },
  };
};
