<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { onDestroy, onMount } from "svelte";
  import { base } from "$app/paths";
  import AlbumPlaceholder from "$components/utils/AlbumPlaceholder.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let selected: string[] = $state([]);

  function addOrRemove(url: string) {
    if (!selected.includes(url)) {
      selected = [...selected, url];
    } else {
      selected.splice(selected.indexOf(url), 1);
      selected = selected;
    }
    data.environmentStore.envokeHaptic("light");
  }

  async function download(url?: string) {
    if (selected.length > 0) {
      await downloaderController.downloadSet(selected);
    } else if (url) {
      await downloaderController.download(url, 1);
    }
    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }

  $effect(() => {
    if (selected.length > 0) {
      data.environmentStore.setMainButtonText(
        `Download Tracks (${selected.length})`
      );
      data.environmentStore.onMainButtonClick(download);
    } else {
      data.environmentStore.setMainButtonText("Download Album");
      data.environmentStore.onMainButtonClick(() => download(data.albumUrl));
    }
  });

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
