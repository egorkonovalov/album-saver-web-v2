<script lang="ts">
  import RecordCard from "./elements/RecordCard.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { artist as ArtistStore } from "$lib/stores";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { getLayoutType } from "./utils/Utils";
  let artist: Record;
  ArtistStore.subscribe((data) => {
    artist = data;
  });
  let tracks: Record[] = [];
  async function fetchData() {
    tracks = await SearchRequestController.getRecords(
      artist.youTubeMusicUrl,
      RequestType.ArtistTracks
    );
  }
  $: data = [...tracks];
  onMount(async () => {
    await fetchData();
  });
</script>

<div>
  <div class="m-4">
    <h1 class="text-xl font-medium">{artist.title}</h1>
  </div>
  <div class={`${getLayoutType(RequestType.Track)} mt-0`}>
    {#each data as record}
      <RecordCard requestType={RequestType.Track} {record} />
    {/each}
  </div>
</div>
