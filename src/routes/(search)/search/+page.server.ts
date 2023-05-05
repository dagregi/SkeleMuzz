import type { Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { SearchResponse } from "$lib/types";

export const load: PageServerLoad = ({ fetch, url }) => {
  const query = url.searchParams.get("/search");
  const type = url.searchParams.get("type");
  const searchResults = async () => {
    // const response = await fetch(`/api/search/${query}/${type}`)
    const response = await fetch(
      `/api/search/${query}${type === undefined || "undefined" || null ? "" : "/" + type
      }`
    );
    const data = await response.json();
    return data as SearchResponse;
  };

  return {
    results: searchResults(),
  };
};

export const actions: Actions = {
  search: async ({ request }) => {
    const formData = await request.formData();
    const query = formData.get("search");
  },
};
