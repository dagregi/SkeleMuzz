<script lang="ts">
  import { TrackList } from "$lib/components";
  import { convertTime } from "$lib/utils";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { album } = data;
  const tracks = album?.tracks?.data ?? [];
</script>

<div
  class="flex flex-col mx-auto px-3 py-4 w-full h-auto bg-gradient-to-b from-surface-500 to-transparent"
>
  <img src={album.cover_big} alt={album.title} class="mx-auto w-36 h-36" />
  <ul class="list mt-2">
    <li>
      <span class="flex-auto space-y-2">
        <h1 class="mb-2">{album.title}</h1>
        <a
          href="/artist/{album.artist?.id}"
          class="text-md !no-underline !text-tertiary-100/80"
        >
          {album.artist?.name}
        </a>
      </span>
    </li>
    <li class="text-sm text-surface-200">
      <span>{album.release_date?.slice(0, 4)}</span>
      <div class="divider-vertical rounded-full h-full bg-tertiary-500 w-1" />
      <span class="flex gap-2">
        <p>{album.nb_tracks} songs,</p>
        <p>{convertTime(album.duration)}</p>
      </span>
    </li>
  </ul>
</div>
<TrackList {tracks} />
