import type {
  AlbumResponse,
  Artist,
  ArtistResponse,
  TrackResponse,
} from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params, fetch }) => {
  const getArtist = async () => {
    const { id } = params;
    const response = await fetch(`/api/artist/${id}`);
    const data = await response.json();
    return data as Artist;
  };

  const getArtistAlbums = async () => {
    const { id } = params;
    const response = await fetch(`/api/artist/${id}/albums`);
    const data = await response.json();
    return data as AlbumResponse;
  };

  const getArtistTopSongs = async () => {
    const { id } = params;
    const response = await fetch(`/api/artist/${id}/top`);
    const data = await response.json();
    return data as TrackResponse;
  };

  const getArtistRelated = async () => {
    const { id } = params;
    const response = await fetch(`/api/artist/${id}/related`);
    const data = await response.json();
    return data as ArtistResponse;
  };

  return {
    artist: getArtist(),
    lazy: {
      albums: getArtistAlbums(),
      topSongs: getArtistTopSongs(),
      related: getArtistRelated(),
    },
  };
};
