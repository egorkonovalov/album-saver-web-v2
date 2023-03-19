<script lang="ts">
  import type { Layout } from "../component.types";
  export let layout: Layout;
</script>

<div class={`${layout} placeholder`}>
  {#each Array(8) as _}
    <div class="entry">
      <div class="image" />
      <div class="text-container">
        <p class="text-line w-24" />
        <p class="text-line w-16" />
      </div>
    </div>
  {/each}
</div>
