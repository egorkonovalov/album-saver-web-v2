<script lang="ts">
  import RecordCard from "../../components/elements/RecordCard.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { artist as ArtistStore } from "$lib/stores";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { getLayoutType } from "../../components/utils/Utils";
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
  <img src={artist.imageUrl} alt="" class="w-full h-36 object-cover" />
  <div class="m-4">
    <h1 class="text-xl font-medium">{artist.title}</h1>
  </div>
  <div class={`${getLayoutType(RequestType.Track)} mt-0`}>
    {#each data as record}
      <RecordCard requestType={RequestType.Track} {record} />
    {/each}
  </div>
</div>
