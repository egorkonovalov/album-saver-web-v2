<script lang="ts">
  import Placeholder from "./utils/Placeholder.svelte";
  import artistsController from "$lib/modules/artists/artists.controller";
  import ArtistCard from "./elements/ArtistCard.svelte";

  export let query: string;

  async function fetchData() {
    return await artistsController.getArtists(query);
  }
</script>

{#await fetchData()}
  <Placeholder count={4} _class="artist-list" />
{:then value}
  <div class="artist-list">
    {#each value as record}
      <ArtistCard artist={record} />
    {/each}
  </div>
{/await}
