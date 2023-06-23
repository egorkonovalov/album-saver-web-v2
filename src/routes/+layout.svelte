<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  onMount(() => {
    data.environmentStore.onBackButtonClick(() => window.history.back());
  });
</script>

<slot />
