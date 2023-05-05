<script lang="ts">
  import {
    AppBar,
    AppShell,
    type DrawerSettings,
  } from "@skeletonlabs/skeleton";
  import { drawerStore } from "@skeletonlabs/skeleton";

  import Navigation from "$lib/components/Navigation.svelte";
  import SideBar from "$lib/components/SideBar.svelte";

  const drawerSettings: DrawerSettings = {
    id: "sidebar",

    bgDrawer: "bg-surface-800",
    rounded: "rounded-none",
    bgBackdrop: "variant-glass",
    width: "w-[320px] md:w-[480px]",
  };
  function drawerOpen(): void {
    drawerStore.open(drawerSettings);
  }
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<SideBar on:click={drawerClose} />
<AppShell>
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-3"
      slotDefault="place-self-center"
      slotTrail="place-content-end"
    >
      <svelte:fragment slot="lead">
        <button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
          <span>
            <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
              <rect width="100" height="20" />
              <rect y="30" width="100" height="20" />
              <rect y="60" width="100" height="20" />
            </svg>
          </span>
        </button>
      </svelte:fragment>
      <h2>(title)</h2>
      <svelte:fragment slot="trail">
        <a href="/search">(search)</a>
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
