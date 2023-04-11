<script lang="ts">
  import RecordCard from "./elements/RecordCard.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { artist as ArtistStore } from "$lib/stores";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { getLayoutType } from "./utils/Utils";
  import Placeholder from "./utils/Placeholder.svelte";

  let artist: Record;
  ArtistStore.subscribe((data) => {
    artist = data;
  });
  let layout = getLayoutType(RequestType.Track);
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

<div class="dark:text-white">
  <div class="m-4">
    <h1 class="text-xl font-medium">{artist.title}</h1>
  </div>
  {#if !data.length}
    <Placeholder {layout} _class={"mt-0"} />
  {:else}
    <div class={`${layout} mt-0`}>
      {#each data as record}
        <RecordCard requestType={RequestType.Track} {record} />
      {/each}
    </div>
  {/if}
</div>
