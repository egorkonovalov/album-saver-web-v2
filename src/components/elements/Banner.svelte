<script lang="ts">
  import { base } from "$app/paths";

  interface Props {
    hasIcon?: boolean;
    children?: import("svelte").Snippet;
  }

  let { hasIcon = false, children }: Props = $props();
</script>

<div class="content-in-center flex flex-col gap-3 dark:text-white">
  {#if hasIcon}
    <img src="{base}/search.svg" alt="search" class="dark:invert" />
  {/if}
  <div class="flex flex-col text-center">
    {@render children?.()}
  </div>
</div>
