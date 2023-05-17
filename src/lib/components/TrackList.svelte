<script lang="ts">
  import { page } from "$app/stores";
  import { isPlaying, playlistStore, trackStore } from "$lib/store";
  import type { Track } from "$lib/types";
  import { convertTime } from "$lib/utils";

  export let tracks: Track[];

  if (!$playlistStore) {
    $playlistStore = tracks;
  }
</script>

<div class="flex flex-col w-full">
  <ol class="list">
    {#each tracks as track, index}
      <li
        on:keypress
        on:click={() => ($trackStore = track)}
        class="list-option"
      >
        <span class="badge">
          {#if $trackStore?.preview === track.preview}
            {#if $isPlaying}
              <i class="fa-solid fa-pause" />
            {:else}
              <i class="fa-solid fa-play" />
            {/if}
          {:else}
            <p>{++index}</p>
          {/if}
        </span>
        <span class="flex-auto truncate">
          <h5 class="truncate">{track?.title}</h5>
          {#if $page.url.pathname.includes("playlist")}
            <dd class="text-sm text-surface-300">{track?.artist?.name}</dd>
          {:else}
            <dd class="text-sm text-surface-300">
              {convertTime(track?.duration)}
            </dd>
          {/if}
        </span>
      </li>
    {/each}
  </ol>
</div>
