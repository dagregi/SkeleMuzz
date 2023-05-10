<script>
  import Navigation from "./Navigation.svelte";
</script>

<div class="flex md:hidden justify-between">
  <h2 class="p-4">SkeleMuzz</h2>
  <button class="md:hidden btn btn-sm mr-4" on:click>
    <i class="fa fa-xmark" />
  </button>
</div>
<hr />
<Navigation on:click />
