<script lang="ts">
  import {
    AppBar,
    RadioGroup,
    RadioItem,
    focusTrap,
  } from "@skeletonlabs/skeleton";

  const search = () => {
    console.log(77);
  };

  let param: number;
  let query: string;
</script>

<AppBar regionRowHeadline="px-1 overflow-x-scroll hide-scrollbar">
  <svelte:fragment slot="lead">
    <button>(back)</button>
  </svelte:fragment>
  <form
    on:submit|preventDefault={search}
    class="input-group input-group-divider grid-cols-[auto_1fr_auto]"
    use:focusTrap={false}
    method="POST"
  >
    <div class="input-group-shim">(icon)</div>
    <input
      bind:value={query}
      class="w-full p-1.5 rounded-sm outline-none"
      type="search"
      placeholder="Search..."
    />
  </form>

  <svelte:fragment slot="headline">
    <RadioGroup
      active="variant-ghost-primary"
      background="bg-transparent"
      border="none"
      display="flex"
    >
      <RadioItem bind:group={param} name="justify" value={0}>(label)</RadioItem>
      <RadioItem bind:group={param} name="justify" value={1}>(label)</RadioItem>
      <RadioItem bind:group={param} name="justify" value={2}>(label)</RadioItem>
    </RadioGroup>
  </svelte:fragment>
</AppBar>
