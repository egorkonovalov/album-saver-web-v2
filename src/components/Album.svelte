<script lang="ts">
  import RecordCard from "./elements/RecordCard.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { album as AlbumStore } from "$lib/stores";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { getLayoutType } from "./utils/Utils";
  import Placeholder from "./utils/Placeholder.svelte";
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import { PlatformEnvironmentService } from "$lib/modules/platformenvironment/platformenvironment.service";

  const environment = PlatformEnvironmentService.getEnvironment();

  async function request() {
    await SearchRequestController.requestRecord(
      album.youTubeMusicPlaylistUrl,
      RequestType.Album
    );
    if (environment instanceof TelegramEnvironment) {
      environment.closeWebApp();
    }
  }

  let album: Record;
  AlbumStore.subscribe((data) => {
    album = data;
  });
  let layout = getLayoutType(RequestType.Track);
  let tracks: Record[] = [];
  async function fetchData() {
    tracks = await SearchRequestController.getRecords(
      album.youTubeMusicPlaylistUrl,
      RequestType.AlbumTracks
    );
  }
  $: data = [...tracks];
  onMount(async () => {
    await fetchData();
  });
</script>

<div class="dark:text-white">
  <div class="m-4 flex items-start justify-between">
    <h1 class="text-l font-medium ">
      {album.author} - {album.title}
    </h1>
    <button on:click|preventDefault={request} class="text-blue-700"
      >Download</button
    >
  </div>
  {#if !data.length}
    <Placeholder {layout} cssClass={"mt-0"} />
  {:else}
    <div class={`${layout} mt-0`}>
      {#each data as record}
        <RecordCard requestType={RequestType.Track} {record} />
      {/each}
    </div>
  {/if}
</div>
