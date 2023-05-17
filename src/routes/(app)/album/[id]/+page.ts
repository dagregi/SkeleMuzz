import type { Album } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, params }) => {
  const { id } = params;
  const getAlbum = async () => {
    try {
      const response = await fetch(`/api/album/${id}`);
      if (!response.ok) throw new Error("Request timeout");
      const data = await response.json();
      return data as Album;
    } catch (err) {
      throw error(408, { message: err.message });
    }
  };

  return {
    album: getAlbum(),
  };
};
