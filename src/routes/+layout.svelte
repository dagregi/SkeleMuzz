<script lang="ts">
  import "../theme.css";

  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import { trackStore } from "$lib/store";
  import { MiniPlayer, Player, SideBar } from "$lib/components";

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
