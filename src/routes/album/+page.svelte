<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { onDestroy, onMount } from "svelte";
  import { base } from "$app/paths";
  import AlbumPlaceholder from "$components/utils/AlbumPlaceholder.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";
  import telegramService from "$lib/modules/platformenvironment/telegram.service";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let selected: string[] = $state([]);

  let loading = $state(false);

  function addOrRemove(url: string) {
    if (!selected.includes(url)) {
      selected = selected.concat(url);
    } else {
      selected.splice(selected.indexOf(url), 1);
    }
    telegramService.envokeHaptic("light");
  }

  async function download(url?: string) {
    if (selected.length > 0) {
      await downloaderController.downloadSet(selected);
    } else if (url) {
      await downloaderController.download(url, 1);
    }
    telegramService.closeWith("success");
  }

  $effect(() => {
    if (selected.length > 0) {
      telegramService.setMainButtonText(`Download Tracks (${selected.length})`);
      telegramService.onMainButtonClick(download);
    } else {
      telegramService.setMainButtonText("Download Album");
      telegramService.onMainButtonClick(() => download(data.albumUrl));
    }
  });

  async function addToLib(record: Record) {
    loading = true;
    await telegramService.addToArrayItem("library", record);
    loading = false;
  }

  onMount(async () => {
    telegramService.showMainButton("Download Album");
    telegramService.onMainButtonClick(() => download(data.albumUrl));
  });

  onDestroy(() => {
    telegramService.offMainButtonClick(() => download(data.albumUrl));
    telegramService.hideMainButton();
  });
</script>

<div class="album-entry">
  {#await data.streamed.album}
    <AlbumPlaceholder />
  {:then value}
    <img class="artwork" src={value.albumImage} alt="cover" />
    <div class="headings">
      <h3 class="title">
        {value.albumTitle}
      </h3>
      <!-- <a
        href="/artist?artistId={value.channelUrl}&artistName={value.artistName}"
        >{value.artistName}</a
        > -->
      <p>{value.artistName}</p>
    </div>
    {#if loading}
      <p>loading..</p>
    {:else}
      <button
        onclick={() =>
          addToLib({
            title: value.albumTitle,
            author: value.artistName,
            imageUrl: value.albumImage,
            year: "",
            recordType: "album",
            youTubeMusicPlaylistUrl: "", // TODO: get link from the browser
          })}
        >Add <span class="rounded-full bg-blue-500 text-white px-2 py-1">+</span
        ></button
      >
    {/if}
  {/await}
  {#await data.streamed.album}
    <Placeholder count={8} _class="album-entry track-list mt-0" />
  {:then value}
    <ul class="track-list">
      {#each value.result as record}
        <li>
          <button
            class="track"
            onclick={() => addOrRemove(record.youTubeMusicPlaylistUrl)}
          >
            <p>{record.title}</p>
          </button>
          {#if selected.includes(record.youTubeMusicPlaylistUrl)}
            <img src="{base}/check-circle.svg" alt="check" class="h-5 w-5" />
          {/if}
        </li>
      {/each}
    </ul>
  {/await}
</div>
