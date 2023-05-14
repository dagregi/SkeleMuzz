<script lang="ts">
  import type { PageData } from "./$types";
  import { convertTime } from "$lib/utils";
  import { isPlaying, playlistStore, trackStore } from "$lib/store";

  export let data: PageData;
  const { playlist } = data;

  if (!$playlistStore) {
    $playlistStore = playlist.tracks?.data;
  }
</script>

<div
  class="flex flex-col mx-auto px-3 py-4 w-full h-auto bg-gradient-to-b from-surface-500 to-transparent"
>
  <img
    src={playlist.picture_big}
    alt={playlist.title}
    class="mx-auto w-36 h-36"
  />
  <ul class="list mt-2">
    <li>
      <span class="flex-auto space-y-2">
        <h1>{playlist.title}</h1>
        <dd class="text-sm text-surface-100">
          {playlist.description}
        </dd>
      </span>
    </li>
    <li class="text-sm text-surface-200">
      <span>{playlist.fans?.toLocaleString()} fans</span>
      <div class="divider-vertical rounded-full h-full bg-tertiary-500 w-1" />
      <span class="flex gap-2">
        <p>{playlist.nb_tracks} songs,</p>
        <p>{convertTime(playlist.duration)}</p>
      </span>
    </li>
  </ul>
</div>

<div class="flex flex-col w-full">
  <ol class="list">
    {#each playlist.tracks?.data ?? [] as track, index}
      <li
        on:keypress
        on:click={() => ($trackStore = track)}
        class="list-option"
      >
        <span class="badge">
          {#if $trackStore}
            {#if $isPlaying}
              <i class="fa-solid fa-pause" />
            {:else}
              <i class="fa-solid fa-play" />
            {/if}
          {:else}
            <p>{++index}</p>
          {/if}
        </span>
        <span class="flex-auto">
          <h5 class="truncate">{track?.title}</h5>
          <dd class="text-sm text-surface-300">{track?.artist?.name}</dd>
        </span>
      </li>
    {/each}
  </ol>
</div>
