<script lang="ts">
  import ArtistProfile from "$lib/components/ArtistProfile.svelte";
  import Cover from "$lib/components/Cover.svelte";
  import TrackList from "$lib/components/TrackList.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { artist, topSongs: tracks, related, albums } = data;
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
<TrackList {tracks} />
<h2 class="px-3 py-4 text-tertiary-600-300-token">Albums</h2>
<!-- Album scrollable -->
<div
  class="flex my-4 px-2 h-auto overflow-x-scroll snap-x scroll-smooth space-x-6 hide-scrollbar"
>
  {#each albums.data as item}
    <Cover {item} />
  {/each}
</div>
<!-- end -->
<h2 class="px-3 py-4 text-tertiary-600-300-token">Related artists</h2>
<!-- Artist scrollable -->
<div
  class="flex my-4 px-2 h-auto overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-8 hide-scrollbar"
>
  {#each related.data as artist}
    <a
      href="/artist/{artist.id}"
      class="flex-none card text-center variant-soft !bg-transparent snap-center"
    >
      <ArtistProfile {artist} />
    </a>
  {/each}
</div>
<!-- end -->
