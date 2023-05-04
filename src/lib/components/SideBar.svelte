<script>
  import { Drawer } from "@skeletonlabs/skeleton";
  import Navigation from "./Navigation.svelte";
</script>

<Drawer>
  <div class="flex md:hidden justify-between">
    <h2 class="p-4">(title)</h2>
    <button class="md:hidden btn btn-sm mr-4" on:click> (icon) </button>
  </div>
  <hr />
  <Navigation on:click />
</Drawer>
