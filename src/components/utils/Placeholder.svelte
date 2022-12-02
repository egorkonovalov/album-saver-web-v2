<script lang="ts">
  export let layout: string;
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
