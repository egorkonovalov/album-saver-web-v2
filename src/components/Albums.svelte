<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import albumsController from "$lib/modules/albums/albums.controller";

  export let query: string;

  async function fetchData() {
    return await albumsController.getAlbums(query);
  }
</script>

{#await fetchData()}
  <Placeholder count={4} _class="album-grid" />
{:then value}
  <div class="album-grid">
    {#each value as record}
      <a
        href="/album?albumUrl=${record.youTubeMusicPlaylistUrl}"
        class="record"
      >
        <RecordCard {record} requestType={RequestType.Release} />
      </a>
    {/each}
  </div>
{/await}
