<script lang="ts">
  import Placeholder from "./utils/Placeholder.svelte";
  import artistsController from "$lib/modules/artists/artists.controller";
  import ArtistCard from "./elements/ArtistCard.svelte";

  interface Props {
    query: string;
  }
  let { query }: Props = $props();
  const fetchData = async () => await artistsController.getArtists(query);
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
