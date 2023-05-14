<script lang="ts">
  import "../theme.css";

  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import SideBar from "$lib/components/SideBar.svelte";
  import Player from "$lib/components/player/Player.svelte";
  import MiniPlayer from "$lib/components/player/MiniPlayer.svelte";
  import { trackStore } from "$lib/store";

  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<Drawer>
  {#if $drawerStore.id === "sidebar"}
    <SideBar on:click={drawerClose} />
  {:else if $drawerStore.id === "player"}
    <Player />
  {/if}
</Drawer>
<slot />
{#if $trackStore}
  <MiniPlayer />
{/if}
