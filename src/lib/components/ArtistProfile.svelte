<script lang="ts">
  import type { Artist } from "$lib/types";

  export let artist: Artist;
</script>

<img
  loading="lazy"
  src={artist.picture_big}
  alt={artist.name}
  class="mx-auto rounded-full w-36 h-36"
/>
<h5 class="mt-2">{artist.name}</h5>
