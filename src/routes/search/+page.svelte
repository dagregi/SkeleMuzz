<script lang="ts">
  import SearchContent from "$lib/components/SearchContent.svelte";
  import Loader from "$lib/components/loaders/Loader.svelte";
  import type { SearchResponse } from "$lib/types";
  import { AppBar, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

  let typeArray = ["Track", "Album", "Artist", "Playlist"];
  let query: string;
  let type = "track";
  let data = {};

  let timeout: number | undefined;
  let searching = false;

  function handle_search() {
    searching = true;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(searchResults, 300);
  }

  function reset() {
    data = {};
    searching = false;
  }

  async function searchResults() {
    if (!query) {
      reset();
      return;
    }

    const response = await fetch(
      `/api/search/${query}${type === undefined || null ? "" : "/" + type}`
    );

    data = (await response.json()) as SearchResponse;
    searching = false;
  }
</script>

<AppBar regionRowHeadline="px-1 overflow-x-scroll hide-scrollbar">
  <svelte:fragment slot="lead">
    <button on:click={() => history.back()} class="list-option">
      <i class="fa fa-arrow-left" />
    </button>
  </svelte:fragment>
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim">
      <i class="fa fa-search" />
    </div>
    <input
      bind:value={query}
      on:input={handle_search}
      class="p-1.5 outline-none"
      name="q"
      type="text"
      placeholder="Search..."
      required
    />
  </div>

  <svelte:fragment slot="headline">
    <RadioGroup
      active="variant-ghost-primary"
      background="bg-transparent"
      border="none"
      display="flex"
    >
      {#each typeArray as item}
        <RadioItem
          bind:group={type}
          name="type"
          on:change={handle_search}
          value={item.toLowerCase()}
        >
          {item}
        </RadioItem>
      {/each}
    </RadioGroup>
  </svelte:fragment>
</AppBar>

{#if searching}
  <Loader />
{:else}
  <ul class="list">
    {#each data?.data ?? [] as item}
      <li class="list-option">
        <SearchContent {type} {item} />
      </li>
    {/each}
  </ul>
{/if}
