<script lang="ts">
  import "../app.css";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}
<footer
  class="w-full sticky bottom-0 h-24 bg-gray-100 flex border border-t border-gray-300"
>
  <a href="/" class="w-full h-full">Search</a>
  <a href="/library" class="w-full h-full">Library</a>
</footer>
