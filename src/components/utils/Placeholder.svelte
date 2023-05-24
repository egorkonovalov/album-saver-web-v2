<script lang="ts">
  import type { Layout } from "../component.types";
  export let layout: Layout;
  export let _class = "";
  export let count: number;
</script>

<div class={`${layout} ${_class} placeholder`}>
  {#each Array(count) as _}
    <div class="entry">
      <div class="image" />
      <div class="text-container">
        <p class="text-line text-line-md" />
        <p class="text-line text-line-sm" />
      </div>
    </div>
  {/each}
</div>
