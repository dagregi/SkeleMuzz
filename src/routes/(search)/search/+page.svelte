<script lang="ts">
  import Loader from "$lib/components/Loader.svelte";
  import type { SearchResponse } from "$lib/types";
  import { AppBar, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

  let typeArray = ["track", "album", "artist", "playlist"];
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
    <a href="/" class="list-option">
      <i class="fa fa-arrow-left" />
    </a>
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
          value={item}
        >
          {item.replace(item[0], item[0].toUpperCase())}
        </RadioItem>
      {/each}
    </RadioGroup>
  </svelte:fragment>
</AppBar>

<!-- {#if $data.isLoading} -->
<!--   <Loader /> -->
<!-- {:else if $data.isError} -->
<!--   <aside -->
<!--     class="alert items-center my-2 mx-auto" -->
<!--     transition:fade|local={{ duration: 200 }} -->
<!--   > -->
<!--     <div class="alert-message"> -->
<!--       <h2 class="text-center">Oops!</h2> -->
<!--       <p>There seems to be a problem.</p> -->
<!--     </div> -->
<!--   </aside> -->
<!-- {:else} -->
{#if searching}
  <Loader />
{:else}
  <ul class="list">
    {#each data?.data ?? [] as item}
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
