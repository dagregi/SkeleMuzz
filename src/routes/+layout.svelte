<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-gold-nouveau.css";
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
  import { Drawer, drawerStore } from "@skeletonlabs/skeleton";

  import Navigation from "$lib/components/navigation.svelte";

  function drawerOpen(): void {
    drawerStore.open();
  }
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<Drawer>
  <div class="flex justify-between">
    <h2 class="p-4">(title)</h2>
    <button class="lg:hidden btn btn-sm mr-4" on:click={drawerClose}>
      (icon)
    </button>
  </div>
  <hr />
  <Navigation />
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 md:w-64">
  <svelte:fragment slot="header">
    <AppBar
      gridColumns="grid-cols-2"
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
    </AppBar>
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    <div id="sidebar-left" class="hidden md:block"><Navigation /></div>
  </svelte:fragment>
  <slot />
</AppShell>
