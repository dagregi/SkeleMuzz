// import type { PageServerLoad } from "./$types";
// import type { SearchResponse } from "$lib/types";

// export const load: PageServerLoad = ({ fetch, url }) => {
//   const query = url.searchParams.get("q");
//   const type = url.searchParams.get("type");
//   const searchResults = async () => {
//     const response = await fetch(
//       `/api/search/${query}${type === undefined || null ? "" : "/" + type}`
//     );
//     return (await response.json()) as SearchResponse;
//   };
//   return {
//     results: searchResults(),
//   };
// };
