<script lang="ts">
  import type { TrackResponse } from "$lib/types";
  import { convertTime } from "$lib/utils";

  export let tracks: TrackResponse;
</script>

<div class="flex flex-col w-full">
  <ol class="list">
    {#each tracks.data as track, index}
      <li class="list-option">
        <span class="badge">{++index}</span>
        <span class="flex-auto truncate">
          <h5 class="truncate">{track?.title}</h5>
          <dd class="text-sm text-surface-300">
            {convertTime(track?.duration)}
          </dd>
        </span>
      </li>
    {/each}
  </ol>
</div>
