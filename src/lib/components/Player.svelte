<script>
  import { trackStore } from "$lib/store";
  import { RangeSlider, drawerStore } from "@skeletonlabs/skeleton";
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
    <RangeSlider name="player-slider" value={50} max={100} step={1} />
    <span class="flex px-1 justify-between">
      <small>00:00</small>
      <small>99:99</small>
    </span>
  </div>
  <div class="bg-transparent mx-auto mt-6 p-2 space-x-8 scale-150">
    <button>
      <i class="fa-solid fa-backward-step fa-lg" />
    </button>
    <button>
      <i class="fa-solid fa-circle-play fa-2xl" />
    </button>
    <button>
      <i class="fa-solid fa-forward-step fa-lg" />
    </button>
  </div>
</div>
