<script lang="ts">
  import TrackList from "$lib/components/TrackList.svelte";
  import { convertTime } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { album } = data;
  $: tracks = album.tracks ?? [];
</script>

<div
  class="flex flex-col mx-auto px-3 py-4 w-full h-auto bg-gradient-to-b from-surface-500 to-transparent"
>
  <img src={album.cover_big} alt={album.title} class="mx-auto w-36 h-36" />
  <ul class="list mt-2">
    <li>
      <span class="flex-auto space-y-2">
        <h1>{album.title}</h1>
      </span>
    </li>
  </ul>
  <ul class="list text-sm text-surface-200">
    <li>
      <span>{album.fans?.toLocaleString()} fans</span>
      <span>{convertTime(album.duration)}</span>
    </li>
  </ul>
</div>
<TrackList {tracks} />
