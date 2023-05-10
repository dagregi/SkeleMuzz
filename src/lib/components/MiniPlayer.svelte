<script lang="ts">
  import { openPlayer } from "$lib/player";
  import { trackStore } from "$lib/store";
</script>

<footer class="variant-glass">
  <ul class="list px-2">
    <li>
      <span>
        <img
          class="w-14 h-14 object-cover rounded-sm"
          src={$trackStore.album?.cover}
          alt={$trackStore.title}
        />
      </span>
      <span on:click={openPlayer} class="flex-auto truncate">
        <h4 class="truncate">{$trackStore.title_short}</h4>
      </span>
      <button class="list-option">
        <i class="fa fa-play" />
      </button>
    </li>
  </ul>
</footer>
