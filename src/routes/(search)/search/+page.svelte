<script lang="ts">
  import Loader from "$lib/components/Loader.svelte";
  import type { SearchResponse } from "$lib/types";
  import {
    AppBar,
    RadioGroup,
    RadioItem,
    focusTrap,
  } from "@skeletonlabs/skeleton";
  import { createQuery } from "@tanstack/svelte-query";
  import { fade } from "svelte/transition";

  let typeArray = ["track", "album", "artist", "playlist"];
  let query: string;
  let type: string;
  const searchResults = async () => {
    const response = await fetch(
      `/api/search/${query}${type === undefined || null ? "" : "/" + type}`
    );
    return (await response.json()) as SearchResponse;
  };

  $: data = createQuery({
    queryKey: ["search"],
    queryFn: () => searchResults(),
    enabled: Boolean(query),
  });
</script>

<AppBar regionRowHeadline="px-1 overflow-x-scroll hide-scrollbar">
  <svelte:fragment slot="lead">
    <a href="/" class="list-option">
      <i class="fa fa-arrow-left" />
    </a>
  </svelte:fragment>
  <form
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
        <RadioItem bind:group={type} name="justify" value={item}>
          {item}
        </RadioItem>
      {/each}
    </RadioGroup>
  </svelte:fragment>
</AppBar>

{#if $data.isLoading}
  <Loader />
{:else if $data.isError}
  <aside
    class="alert items-center my-2 mx-auto"
    transition:fade|local={{ duration: 200 }}
  >
    <div class="alert-message">
      <h2 class="text-center">Oops!</h2>
      <p>There seems to be a problem.</p>
    </div>
  </aside>
{:else}
  <ul class="list">
    {#each $data.data?.data ?? [] as item}
      <li class="list-option">
        <img
          class="w-14 h-14 object-cover"
          src={item.cover ?? item.album?.cover ?? item.picture}
          alt={item.name ?? item.title}
        />
        <span class="flex-auto truncate">
          <h5 class="truncate">{item.name ?? item.title}</h5>
          <p>{item.type}</p>
        </span>
      </li>
    {/each}
  </ul>
{/if}
