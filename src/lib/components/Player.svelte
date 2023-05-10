<script>
  import { createPlayer } from "$lib/player";
  import { currentTime, duration, isPlaying, trackStore } from "$lib/store";
  import { formatDuration } from "$lib/utils";
  import { RangeSlider, drawerStore } from "@skeletonlabs/skeleton";

  const { audio, skipPrev, skipNext } = createPlayer();
</script>

<div class="flex flex-col content-between w-full px-4 py-2 mx-auto">
  <div class="flex flex-row items-center mb-14 py-2">
    <button
      class="flex-none"
      on:click={() => {
        drawerStore.close();
      }}
    >
      <i class="fa-solid fa-chevron-down" />
    </button>
    <h3 class="truncate mx-auto">{$trackStore.title_short}</h3>
  </div>
  <img
    src={$trackStore.album?.cover_big}
    alt={$trackStore.title}
    class="w-full my-6 rounded shadow-lg object-cover"
  />
  <span class="flex-auto mt-12 space-y-1">
    <h3 class="truncate">{$trackStore.title_short}</h3>
    <p>{$trackStore.artist?.name}</p>
  </span>
  <div class="my-4">
    <RangeSlider
      name="player-slider"
      value={$currentTime}
      max={$duration}
      step={1}
    />
    <span class="flex px-1 justify-between">
      <small>{formatDuration($currentTime)}</small>
      <small>{formatDuration($duration)}</small>
    </span>
  </div>
  <div class="bg-transparent mx-auto mt-6 p-2 space-x-8 scale-150">
    <button on:click={() => skipPrev($trackStore.preview)}>
      <i class="fa-solid fa-backward-step fa-lg" />
    </button>
    <button
      on:click={() => {
        if ($isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }}
    >
      {#if $isPlaying}
        <i class="fa-solid fa-circle-pause fa-2xl" />
      {:else}
        <i class="fa-solid fa-circle-play fa-2xl" />
      {/if}
    </button>
    <button on:click={() => skipNext($trackStore.preview)}>
      <i class="fa-solid fa-forward-step fa-lg" />
    </button>
  </div>
</div>
