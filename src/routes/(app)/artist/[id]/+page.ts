import type {
  AlbumResponse,
  Artist,
  ArtistResponse,
  TrackResponse,
} from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params, fetch }) => {
  const { id } = params;
  const getArtist = async () => {
    try {
      const response = await fetch(`/api/artist/${id}`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as Artist;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  const getArtistAlbums = async () => {
    try {
      const response = await fetch(`/api/artist/${id}/albums`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as AlbumResponse;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  const getArtistTopSongs = async () => {
    try {
      const response = await fetch(`/api/artist/${id}/top`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as TrackResponse;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  const getArtistRelated = async () => {
    try {
      const response = await fetch(`/api/artist/${id}/related`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as ArtistResponse;
    } catch (err) {
      throw error(408, { message: err.message });
    }
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
