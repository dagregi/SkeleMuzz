<script lang="ts">
  import type { HttpError } from "@sveltejs/kit";

  export let error: HttpError;
</script>

<section class="col-span-2 mx-auto items-center space-y-2">
  <div class="flex">
    <h1 class="ml-auto">{error.status}</h1>
    <span class="flex mr-auto flex-row mx-2 space-x-2 items-center">
      <div class="divider-vertical rounded-full h-full bg-tertiary-500 w-1" />
      <h2>Huh?!</h2>
    </span>
  </div>
  <p>{error.body.message}</p>
</section>
