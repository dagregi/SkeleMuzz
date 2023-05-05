import type { Album } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ fetch, params }) => {
  const { id } = params;
  const getAlbum = async () => {
    const response = await fetch(`/api/album/${id}`);
    const data = await response.json();
    return data as Album;
  };

  return {
    album: getAlbum(),
  };
};
