<script lang="ts">
  import Footer from "$components/elements/Footer.svelte";
  import "../app.css";

  interface Props {
    children?: import("svelte").Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}
<Footer />
