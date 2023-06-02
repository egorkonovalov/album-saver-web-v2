<script lang="ts">
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";

  type Data = {
    tracks: Record[];
  };
  export let data: Data;
</script>

{#each data.tracks as track}
  <h1>
    {track.author}
  </h1>
{/each}
