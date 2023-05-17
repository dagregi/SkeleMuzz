<script lang="ts">
  import ArtistProfile from "$lib/components/ArtistProfile.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import CoverLoader from "$lib/components/loaders/CoverLoader.svelte";
  import Error from "$lib/components/Error.svelte";
  import Loader from "$lib/components/loaders/Loader.svelte";
  import TrackList from "$lib/components/TrackList.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ artist, lazy } = data);
</script>

<div
  class="flex flex-col mx-auto px-3 py-4 w-full h-auto bg-gradient-to-b from-surface-500 to-transparent"
>
  <ArtistProfile {artist} />
  <span class="text-md text-surface-200">
    {artist.nb_fan?.toLocaleString()} fans
  </span>
</div>
<h2 class="px-3 py-4 text-tertiary-600-300-token">Top tracks</h2>
{#await lazy.topSongs}
  <!-- Promise is pending -->
  <Loader />
{:then tracks}
  <!-- Promise was fulfilled -->
  <TrackList tracks={tracks?.data} />
{:catch error}
  <!-- Promise was rejected -->
  <Error {error} />
{/await}
<h2 class="px-3 py-4 text-tertiary-600-300-token">Albums</h2>
<!-- Album scrollable -->
<div
  class="flex my-4 px-2 h-auto overflow-x-scroll snap-x scroll-smooth space-x-6 hide-scrollbar"
>
  {#await lazy.albums}
    <!-- Promise is pending -->
    <CoverLoader />
  {:then albums}
    <!-- Promise was fulfilled -->
    {#each albums.data as item}
      <Cover {item} />
    {/each}
  {:catch error}
    <!-- Promise was rejected -->
    <Error {error} />
  {/await}
</div>
<!-- end -->
<h2 class="px-3 py-4 text-tertiary-600-300-token">Related artists</h2>
<!-- Artist scrollable -->
<div
  class="flex my-4 px-2 h-auto overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-8 hide-scrollbar"
>
  {#await lazy.related}
    <!-- Promise is pending -->
    <CoverLoader />
  {:then related}
    <!-- Promise was fulfilled -->
    {#each related.data as artist}
      <a
        href="/artist/{artist.id}"
        class="flex-none card text-center variant-soft !bg-transparent snap-center"
      >
        <ArtistProfile {artist} />
      </a>
    {/each}
  {:catch error}
    <!-- Promise was rejected -->
    <Error {error} />
  {/await}
</div>
<!-- end -->
