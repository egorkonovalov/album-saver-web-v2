<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  onMount(() => {
    data.environment.onBackButtonClick(() => window.history.back());
  });
</script>

<div class="dark:text-white">
  <slot />
</div>
