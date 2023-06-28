<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import releasesController from "$lib/modules/releases/releases.controller";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import { base } from "$app/paths";

  async function fetchData() {
    return await releasesController.getReleases();
  }
</script>

{#await fetchData()}
  <Placeholder count={4} _class="album-grid" />
{:then value}
  <div class="album-grid">
    {#each value as record}
      <a
        href="{base}/album?albumUrl=${record.youTubeMusicPlaylistUrl}"
        class="record"
      >
        <RecordCard {record} requestType={RequestType.Release} />
      </a>
    {/each}
  </div>
{/await}
