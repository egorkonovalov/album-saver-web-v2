<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { onDestroy, onMount } from "svelte";
  import { base } from "$app/paths";
  import AlbumPlaceholder from "$components/utils/AlbumPlaceholder.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";
  import platformenvironmentService from "$lib/modules/platformenvironment/platformenvironment.service";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  let selected: string[] = $state([]);

  function addOrRemove(url: string) {
    if (!selected.includes(url)) {
      selected = selected.concat(url);
    } else {
      selected.splice(selected.indexOf(url), 1);
    }
    platformenvironmentService.envokeHaptic("light");
  }

  async function download(url?: string) {
    if (selected.length > 0) {
      await downloaderController.downloadSet(selected);
    } else if (url) {
      await downloaderController.download(url, 1);
    }
    platformenvironmentService.closeWith("success");
  }

  $effect(() => {
    if (selected.length > 0) {
      platformenvironmentService.setMainButtonText(
        `Download Tracks (${selected.length})`
      );
      platformenvironmentService.onMainButtonClick(download);
    } else {
      platformenvironmentService.setMainButtonText("Download Album");
      platformenvironmentService.onMainButtonClick(() =>
        download(data.albumUrl)
      );
    }
  });

  onMount(async () => {
    platformenvironmentService.showMainButton("Download Album");
    platformenvironmentService.onMainButtonClick(() => download(data.albumUrl));
  });

  onDestroy(() => {
    platformenvironmentService.offMainButtonClick(() =>
      download(data.albumUrl)
    );
    platformenvironmentService.hideMainButton();
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
