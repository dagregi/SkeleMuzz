<script lang="ts">
  import type { PageData } from "./$types";
  import { convertTime } from "$lib/utils";

  export let data: PageData;
  const { playlist } = data;
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
  </ul>
  <ul class="list text-sm text-surface-200">
    <li>
      <span>{playlist.fans?.toLocaleString()} fans</span>
      <span>{convertTime(playlist.duration)}</span>
    </li>
  </ul>
</div>

<div class="flex flex-col w-full">
  <ol class="list">
    {#each playlist.tracks?.data ?? [] as track, index}
      <li class="list-option">
        <span class="badge">{++index}</span>
        <span class="flex-auto">
          <h5 class="truncate">{track?.title}</h5>
          <dd class="text-sm text-surface-300">{track?.artist?.name}</dd>
        </span>
      </li>
    {/each}
  </ol>
</div>
