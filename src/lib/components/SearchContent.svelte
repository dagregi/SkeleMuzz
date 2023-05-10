<script lang="ts">
  export let type: string;
  export let item: any;

  function capitalize(item: string) {
    return item.replace(item[0], item[0].toUpperCase());
  }
</script>

{#if type === "track" || type === "album"}
  <img
    class="w-14 h-14 object-cover"
    src={item.cover ?? item.album?.cover}
    alt={item.title}
  />
  <span class="flex-auto truncate">
    <a
      href={`${type === "album" ? "/album/" + item.id : ""}`}
      class="!no-underline"
    >
      <h5 class="truncate text-tertiary-200">{item.title}</h5>
      <div class="flex space-x-1 text-surface-100">
        <span class="!text-sm">
          {capitalize(item.type)}
          •
        </span>
        <p class="!text-sm">{item.artist?.name}</p>
      </div>
    </a>
  </span>
{:else if type === "artist"}
  <img
    class="w-14 h-14 rounded-full object-cover"
    src={item.picture}
    alt={item.name}
  />
  <span class="flex-auto truncate">
    <a href="/artist/{item.id}" class="!no-underline">
      <h5 class="truncate text-tertiary-200">{item.name}</h5>
      <p class="text-surface-100 !text-sm">{capitalize(item.type)}</p>
    </a>
  </span>
{:else}
  <img
    class="w-14 h-14 object-cover"
    src={item.cover ?? item.album?.cover ?? item.picture}
    alt={item.name ?? item.title}
  />
  <span class="flex-auto truncate">
    <a href="/playlist/{item.id}" class="!no-underline">
      <h5 class="truncate text-tertiary-200">{item.title}</h5>
      <p class="text-surface-100 !text-sm">{capitalize(item.type)}</p>
    </a>
  </span>
{/if}
