<script lang="ts">
  import { page } from "$app/stores";
  import type { Album, Playlist } from "$lib/types";

  $: isPlaylist = $page.url.pathname === "/";
  export let item: Album | Playlist;
</script>

<a
  href={`/${isPlaylist ? "playlist/" + item.id : "album/" + item.id}`}
  class={`card card-hover flex-none variant-soft !bg-transparent ${
    isPlaylist ? " w-40 snap-start" : " w-64 snap-center"
  }`}
>
  <img
    class="w-full rounded-sm object-cover"
    src={item.cover_medium ?? item.picture_medium}
    alt={item.title}
  />
  <h5 class="mt-2 truncate">{item.title}</h5>
</a>
