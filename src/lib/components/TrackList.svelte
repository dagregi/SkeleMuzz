<script lang="ts">
  import type { Track } from "$lib/types";
  import { convertTime } from "$lib/utils";

  export let tracks: Track[];
</script>

<div class="flex flex-col w-full">
  <ol class="list">
    {#each tracks as track, index}
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
