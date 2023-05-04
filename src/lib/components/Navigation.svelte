<script lang="ts">
  import { page } from "$app/stores";
  $: homeClass = $page.url.pathname === "/" ? "text-primary-600 font-bold" : "";
  $: searchClass =
    $page.url.pathname === "/search" ? "text-primary-600 font-bold" : "";
</script>

<nav class="list-nav p-4">
  <ul>
    <li><a href="/" class={homeClass} on:click>Home</a></li>
    <li><a href="/search" class={searchClass} on:click>Search</a></li>
    <hr class="mx-4 w-4 rounded-full !border-t-4" />
    <li><a href="https://github.com/dagregi">Github</a></li>
    <li><a href="https://t.me/dagregi">Telegram</a></li>
  </ul>
</nav>
