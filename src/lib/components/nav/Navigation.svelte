<script lang="ts">
  import { page } from "$app/stores";
  $: classesActive = (href: string) =>
    href === $page.url.pathname ? "!bg-primary-600" : "";
</script>

<nav class="list-nav p-4">
  <ul>
    <li class="my-2">
      <a href="/" class={classesActive("/")} on:click><span>Home</span></a>
    </li>
    <li class="my-2">
      <a href="/search" class={classesActive("/search")} on:click>
        <span>Search</span>
      </a>
    </li>
    <li class="my-2">
      <hr class="rounded-full !border-t-4" />
    </li>
    <li class="my-2">
      <a href="https://github.com/dagregi"><span>Github</span></a>
    </li>
    <li class="my-2">
      <a href="https://t.me"><span>Telegram</span></a>
    </li>
  </ul>
</nav>
