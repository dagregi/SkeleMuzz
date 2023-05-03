<script lang="ts">
  import { drawerStore } from "@skeletonlabs/skeleton";
  function drawerClose(): void {
    drawerStore.close();
  }
</script>

<nav class="list-nav p-4">
  <ul>
    <li><a href="/" on:click={drawerClose}>Homepage</a></li>
    <li><a href="/search" on:click={drawerClose}>Search</a></li>
    <li><a href="https://github.com/dagregi">Github</a></li>
    <li><a href="https://t.me/dagregi">Telegram</a></li>
  </ul>
</nav>

