<script lang="ts">
  import {
    AppBar,
    RadioGroup,
    RadioItem,
    focusTrap,
  } from "@skeletonlabs/skeleton";

  import type { SearchResponse } from "$lib/types";

  let data: SearchResponse | undefined;

  let typeArray = ["track", "album", "artist", "playlist"];
  let query: string;
  let type = "track";

  const searchResults = async () => {
    const response = await fetch(
      `/api/search/${query}${type === undefined || null ? "" : "/" + type}`
    );
    if (response.ok) {
      return (await response.json()) as SearchResponse;
    }
  };
</script>

<AppBar regionRowHeadline="px-1 overflow-x-scroll hide-scrollbar">
  <svelte:fragment slot="lead">
    <a href="/" class="list-option">
      <i class="fa fa-arrow-left" />
    </a>
  </svelte:fragment>
  <form
    on:submit|preventDefault={async () => (data = await searchResults())}
    class="input-group input-group-divider grid-cols-[auto_1fr_auto]"
    use:focusTrap={true}
    action="/search"
  >
    <button type="submit" class="input-group-shim">
      <i class="fa fa-search" />
    </button>
    <input
      bind:value={query}
      class="w-full p-1.5 rounded-sm outline-none"
      name="q"
      type="text"
      required
      placeholder="Search..."
    />
    <input type="hidden" name="type" value={type} />
  </form>

  <svelte:fragment slot="headline">
    <RadioGroup
      active="variant-ghost-primary"
      background="bg-transparent"
      border="none"
      display="flex"
    >
      {#each typeArray as item}
        <RadioItem bind:group={type} name="justify" value={item}
          >{item}</RadioItem
        >
      {/each}
    </RadioGroup>
  </svelte:fragment>
</AppBar>

<div>
  {#if data?.data}
    <dl class="list-dl">
      {#each data.data as item}
        <div class="list-option">
          <img
            class="object-cover w-14 h-14"
            src={item.cover ?? item.picture ?? item.album.cover}
            alt={item.title ?? item.name}
          />
          <span class="flex-auto truncate">
            <h5 class="truncate">{item.title ?? item.name}</h5>
            <dd>{item.type}</dd>
          </span>
        </div>
      {/each}
    </dl>
  {/if}
  <p>Nope.</p>
</div>
