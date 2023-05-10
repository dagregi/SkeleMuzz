<script lang="ts">
  import "../theme.css";

  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
  import SideBar from "$lib/components/SideBar.svelte";
  import { trackStore } from "$lib/store";
  import { onMount } from "svelte";
  import Player from "$lib/components/Player.svelte";
  import MiniPlayer from "$lib/components/MiniPlayer.svelte";

  function drawerClose(): void {
    drawerStore.close();
  }

  let player;
  onMount(() => {
    return trackStore.subscribe(() => {
      player.load();
    });
  });
</script>

<Drawer>
  {#if $drawerStore.id === "sidebar"}
    <SideBar on:click={drawerClose} />
  {:else if $drawerStore.id === "player"}
    <Player />
  {/if}
</Drawer>
<audio bind:this={player} controls>
  <source src={$trackStore?.preview} type="audio/mpeg" />
</audio>
<slot />
{#if $trackStore}
  <MiniPlayer />
{/if}
