import type { ArtistResponse, PlaylistResponse } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, setHeaders }) => {
  const getPlaylists = async () => {
    const response = await fetch("/api/chart/playlists");
    setHeaders({
      "cache-control": "max-age=600",
    });
    const data = await response.json();
    return data as PlaylistResponse;
  };

  const getTopArtists = async () => {
    const response = await fetch("/api/chart/artists");
    const data = await response.json();
    return data as ArtistResponse;
  };

  return {
    lazy: {
      playlists: getPlaylists(),
      topArtists: getTopArtists(),
    },
  };
};
