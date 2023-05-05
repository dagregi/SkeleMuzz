<script lang="ts">
  import "../theme.css";

  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";
</script>

<slot />
<footer class="hidden">
  <ul class="list">
    <li>
      <span>(cover)</span>
      <span class="flex-auto">(title)</span>
      <button class="list-option">(pause)</button>
    </li>
  </ul>
</footer>
