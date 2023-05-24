<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import searchRequestController from "$lib/modules/musicsearch/searchrequest.controller";
  import {
    album as albumStore,
    popupContentType,
    popupIsShown,
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

  async function handleClick() {
    switch (requestType) {
      case RequestType.Album:
      case RequestType.Release: {
        setPopup();
        break;
      }
      case RequestType.Track:
        request();
    }
  }

  function setPopup() {
    albumStore.set(record);
    popupContentType.set("album");
    popupIsShown.set(true);
  }
</script>

<a
  href="/"
  on:click|preventDefault={async () => handleClick()}
  class={_class + " record"}
>
  <img
    src={record.imageUrl}
    alt={record.title}
    class={`${requestType} object-cover cover`}
  />
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
