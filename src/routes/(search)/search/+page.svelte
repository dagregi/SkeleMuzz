<script lang="ts">
  import { enhance } from "$app/forms";
  import {
    AppBar,
    RadioGroup,
    RadioItem,
    focusTrap,
  } from "@skeletonlabs/skeleton";
  import type { PageData } from "./$types";

  export let data: PageData;

  const { results } = data;
  let type: string;
  let query: string;
</script>

<AppBar regionRowHeadline="px-1 overflow-x-scroll hide-scrollbar">
  <svelte:fragment slot="lead">
    <a href="/">(back)</a>
  </svelte:fragment>
  <form
    class="input-group input-group-divider grid-cols-[auto_1fr_auto]"
    use:focusTrap={false}
    method="POST"
    action="?/search={query}&type={type}"
  >
    <button type="submit" class="input-group-shim">(icon)</button>
    <input
      bind:value={query}
      class="w-full p-1.5 rounded-sm outline-none"
      name="search"
      type="text"
      required
      placeholder="Search..."
    />
  </form>

  <svelte:fragment slot="headline">
    <RadioGroup
      active="variant-ghost-primary"
      background="bg-transparent"
      border="none"
      display="flex"
    >
      <RadioItem bind:group={type} name="justify" value={"track"}>
        Tracks
      </RadioItem>
      <RadioItem bind:group={type} name="justify" value={"album"}>
        Albums
      </RadioItem>
      <RadioItem bind:group={type} name="justify" value={"artist"}>
        Artists
      </RadioItem>
      <RadioItem bind:group={type} name="justify" value={"playlist"}>
        Playlists
      </RadioItem>
    </RadioGroup>
  </svelte:fragment>
</AppBar>

<div>
  {#each results?.data as item}
    <h3>{item?.title}</h3>
  {/each}
</div>
