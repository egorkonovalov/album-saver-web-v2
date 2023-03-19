<script lang="ts">
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  export let artist: Record;
  import { artist as artistStore } from "$lib/stores";
</script>

<a href="/artist" on:click={() => artistStore.set(artist)}>
  <img src={artist.imageUrl} alt={artist.title} />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{artist.title}</p>
  </div>
</a>
