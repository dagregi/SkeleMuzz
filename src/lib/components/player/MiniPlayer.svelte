<script lang="ts">
  import { openPlayer } from "$lib/player";
  import { audioStore, isPlaying, trackStore } from "$lib/store";

  $: audio = $audioStore;
</script>

<footer class="variant-glass">
  <ul class="list px-2">
    <li>
      <span>
        <img
          src={$trackStore.album?.cover}
          alt={$trackStore.title}
          class="w-14 h-14 object-cover rounded-sm"
        />
      </span>
      <span on:keypress on:click={openPlayer} class="flex-auto truncate">
        <h4 class="truncate">{$trackStore.title_short}</h4>
      </span>
      <button
        class="list-option"
        on:click={() => {
          if ($isPlaying) {
            audio.pause();
          } else {
            audio.play();
          }
        }}
      >
        {#if $isPlaying}
          <i class="fa-solid fa-pause" />
        {:else}
          <i class="fa-solid fa-play" />
        {/if}
      </button>
    </li>
  </ul>
</footer>
