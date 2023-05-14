<script lang="ts">
  import Cover from "$lib/components/Cover.svelte";
  import CoverLoader from "$lib/components/loaders/CoverLoader.svelte";
  import type { PageData } from "./$types";
  import Error from "$lib/components/Error.svelte";

  export let data: PageData;
  $: ({ lazy } = data);
</script>

<div class="container mx-auto p-8 space-y-8">
  <h3>Popular playlists</h3>
  <div
    class="flex px-2 overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-6 hide-scrollbar"
  >
    {#await lazy.playlists}
      <CoverLoader />
    {:then playlists}
      <!-- promise was fulfilled -->
      {#each playlists?.data as item}
        <Cover {item} />
      {/each}
    {:catch error}
      <Error />
    {/await}
  </div>
  <h3>Popular artists</h3>
  <div class="grid grid-cols-2 gap-2 mx-auto">
    {#await lazy.topArtists}
      <CoverLoader />
    {:then topArtists}
      <!-- promise was fulfilled -->
      {#each topArtists?.data as artist}
        <a
          href="/artist/{artist.id}"
          class="card card-hover my-2 flex-none w-40 !bg-transparent variant-soft"
        >
          <img
            loading="lazy"
            src={artist?.picture_medium}
            alt={artist?.name}
            class="w-full rounded-sm object-cover"
          />
          <h5 class="my-2">{artist?.name}</h5>
        </a>
      {/each}
    {:catch error}
      <Error />
    {/await}
  </div>
</div>
