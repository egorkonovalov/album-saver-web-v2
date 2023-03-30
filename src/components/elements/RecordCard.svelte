<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import { PlatformEnvironmentService } from "$lib/modules/platformenvironment/platformenvironment.service";
  import {
    album as albumStore,
    popupContentType,
    popupIsShown,
  } from "$lib/stores";

  const environment = PlatformEnvironmentService.getEnvironment();
  export let requestType: RequestType;
  export let record: Record;

  function setPopup() {
    albumStore.set(record);
    popupContentType.set("album");
    popupIsShown.update((status) => (status = true));
  }

  async function request() {
    await SearchRequestController.requestRecord(
      record.youTubeMusicPlaylistUrl,
      requestType
    );
    if (environment instanceof TelegramEnvironment) {
      environment.closeWebApp();
    }
  }

  async function handleClick() {
    switch (requestType) {
      case RequestType.Album: {
        setPopup();
        break;
      }
      case RequestType.Track: {
        request();
      }
    }
  }
</script>

<a href="/" on:click|preventDefault={async () => handleClick()}>
  <img src={record.imageUrl} alt={record.title} class="object-cover" />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{record.title}</p>
    {#if requestType !== RequestType.Artist}
      <p class="font-light">
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
