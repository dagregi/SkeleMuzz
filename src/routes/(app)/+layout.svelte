<script lang="ts">
  import {
    AppBar,
    AppShell,
    type DrawerSettings,
  } from "@skeletonlabs/skeleton";
  import { drawerStore } from "@skeletonlabs/skeleton";

  import Navigation from "$lib/components/Navigation.svelte";

  const drawerSettings: DrawerSettings = {
    id: "sidebar",

    bgDrawer: "bg-surface-800",
    rounded: "rounded-none",
    bgBackdrop: "variant-glass",
    width: "w-[320px] ",
  };
  function drawerOpen(): void {
    drawerStore.open(drawerSettings);
  }
</script>

<AppShell slotSidebarLeft="bg-surface-800 md:w-[320px]">
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-3"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
          <i class="fa fa-bars" />
        </button>
      </svelte:fragment>
      <h2><a href="/">SkeleMuzz</a></h2>
      <svelte:fragment slot="trail">
        <a href="/search"><i class="fa fa-search" /></a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="hidden md:block">
      <Navigation />
    </div>
  </svelte:fragment>
  <slot />
</AppShell>
