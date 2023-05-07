<script>
  import { browser } from "$app/environment";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  const queryClieant = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
      },
    },
  });
</script>

<QueryClientProvider client={queryClieant}>
  <slot />
</QueryClientProvider>
