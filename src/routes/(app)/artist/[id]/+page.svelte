<script lang="ts">
  import { convertTime } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { artist, topSongs, related, albums } = data;
</script>

<div
  class="flex flex-col mx-auto px-3 py-4 w-full h-auto bg-gradient-to-b from-surface-500 to-transparent"
>
  <img
    src={artist.picture_big}
    alt={artist.name}
    class="mx-auto rounded-full w-36 h-36"
  />
  <h1 class="my-2">{artist.name}</h1>
  <span class="text-md text-surface-200">
    {artist.nb_fan?.toLocaleString()} fans
  </span>
</div>
<h2 class="px-3 py-4 text-tertiary-600-300-token">Top tracks</h2>
<div class="flex flex-col w-full">
  <ol class="list">
    {#each topSongs.data as song, index}
      <li class="list-option">
        <span class="badge">{++index}</span>
        <span class="flex-auto">
          <h5 class="truncate">{song?.title}</h5>
          <dd class="text-sm text-surface-300">
            {convertTime(song?.duration)}
          </dd>
        </span>
      </li>
    {/each}
  </ol>
</div>
<h2 class="px-3 py-4 text-tertiary-600-300-token">Albums</h2>
<div
  class="flex px-2 h-auto overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-6 hide-scrollbar"
>
  {#each albums.data as album}
    <a
      href="/album/{album.id}"
      class="card card-hover w-64 variant-soft !bg-transparent flex-none snap-center"
    >
      <img
        class="w-full rounded-sm object-cover"
        src={album.cover_big}
        alt={album.title}
      />
      <h5 class="mt-2">{album.title}</h5>
    </a>
  {/each}
</div>
<h2 class="px-3 py-4 text-tertiary-600-300-token">Related artists</h2>
<div
  class="flex px-2 h-auto overflow-x-scroll snap-x snap-mandatory scroll-smooth space-x-8 hide-scrollbar"
>
  {#each related.data as artist}
    <a
      href="/artist/{artist.id}"
      class="flex-none card text-center variant-soft !bg-transparent snap-center"
    >
      <img
        src={artist.picture_big}
        alt={artist.name}
        class="mx-auto rounded-full w-36 h-36"
      />
      <h5 class="mt-2 mx-auto">{artist.name}</h5>
    </a>
  {/each}
</div>
