<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { onDestroy, onMount } from "svelte";
  import AlbumPlaceholder from "$components/utils/AlbumPlaceholder.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";

  export let data: PageData;

  let isDownloading = false;

  function download(url: string) {
    if (isDownloading) return;

    isDownloading = true;
    data.environmentStore.disableMainButton();

    void downloaderController.download(url, 1).catch((error) => {
      console.error("Unable to start album download", error);
    });

    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }

  const handleMainButtonClick = () => download(data.albumUrl);

  onMount(() => {
    data.environmentStore.showMainButton("Download Album");
    data.environmentStore.onMainButtonClick(handleMainButtonClick);
  });

  onDestroy(() => {
    data.environmentStore.offMainButtonClick(handleMainButtonClick);
    data.environmentStore.hideMainButton();
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
  {/await}
  {#await data.streamed.album}
    <Placeholder count={8} _class="album-entry track-list mt-0" />
  {:then value}
    <ul class="track-list">
      {#each value.result as record}
        <li>
          <div class="track">
            <p>{record.title}</p>
          </div>
        </li>
      {/each}
    </ul>
  {/await}
</div>
