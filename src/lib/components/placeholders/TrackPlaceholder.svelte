<ul class="list">
  {#each Array(10) as _}
    <li>
      <div class="w-14 h-14 placeholder animate-pulse" />
      <span class="flex-auto space-y-2">
        <div class="placeholder animate-pulse" />
        <div class="placeholder w-1/2 animate-pulse" />
      </span>
    </li>
  {/each}
</ul>
