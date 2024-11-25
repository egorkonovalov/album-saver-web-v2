<script lang="ts">
  interface Props {
    _class?: string;
    count: number;
  }

  let { _class = "", count }: Props = $props();
</script>

<div class={`${_class} placeholder`}>
  {#each Array(count) as _}
    <div class="entry">
      <div class="image"></div>
      <div class="text-container">
        <p class="text-line text-line-md"></p>
        <p class="text-line text-line-sm"></p>
      </div>
    </div>
  {/each}
</div>
