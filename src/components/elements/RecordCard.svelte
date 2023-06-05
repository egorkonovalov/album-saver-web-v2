<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import searchRequestController from "$lib/modules/musicsearch/searchrequest.controller";
  import { goto } from "$app/navigation";
  import {
    album as albumStore,
    Environment as EnvironmentStore,
  } from "$lib/stores";
  import { get } from "svelte/store";

  const environment = get(EnvironmentStore);
  export let requestType: RequestType;
  export let record: Record;
  export let _class = "";

  async function request() {
    await searchRequestController.requestRecord(
      record.youTubeMusicPlaylistUrl,
      requestType
    );
    environment.close();
  }

  function handleClick() {
    switch (requestType) {
      case RequestType.Album:
      case RequestType.Release:
      case RequestType.AlbumTracks:
        albumStore.set(record);
        goto(`/album?albumUrl=${record.youTubeMusicPlaylistUrl}`);
        break;
      case RequestType.Track:
        request();
    }
  }
</script>

<a href="/" on:click|preventDefault={handleClick} class={_class + " record"}>
  <div class="cover" style={`background-image: url(${record.imageUrl})`} />
  <div class="record__title-container">
    <p class="record__name">{record.title}</p>
    {#if requestType !== RequestType.Artist}
      <p class="record__artist">
        {record.author === undefined ? "Various Artists" : record.author}
      </p>
    {/if}
    {#if requestType === "albums"}
      <div class="flex gap-1 text-[11px] font-medium">
        {#if record.recordType}
          <p>
            {record.recordType ? record.recordType : "Album"}
          </p>
          <p>•</p>
        {/if}
        <p>{record.year}</p>
      </div>
    {/if}
  </div>
</a>
