<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { onDestroy, onMount } from "svelte";
  import AlbumPlaceholder from "$components/utils/AlbumPlaceholder.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";

  export let data: PageData;

  async function download(url: string) {
    await downloaderController.download(url, 1);
    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }

  onMount(async () => {
    data.environmentStore.showMainButton("Download Album");
    data.environmentStore.onMainButtonClick(() => download(data.albumUrl));
  });

  onDestroy(() => {
    data.environmentStore.offMainButtonClick(() => download(data.albumUrl));
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
