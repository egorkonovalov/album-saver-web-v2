<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onDestroy, onMount } from "svelte";
  import searchRequestController from "$lib/modules/musicsearch/searchrequest.controller";
  import { base } from "$app/paths";

  export let data: PageData;

  let selected: string[] = [];

  function addOrRemove(url: string) {
    if (!selected.includes(url)) {
      selected = [...selected, url];
    } else {
      selected.splice(selected.indexOf(url), 1);
      selected = selected;
    }
    data.environmentStore.envokeHaptic("light");
  }

  async function request() {
    if (selected.length > 0) {
      await searchRequestController.requestSet(selected);
    } else {
      await searchRequestController.requestRecord(
        data.albumStore.youTubeMusicPlaylistUrl,
        RequestType.Album
      );
    }
    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }

  $: if (selected.length > 0) {
    data.environmentStore.setMainButtonText(
      `Download Tracks (${selected.length})`
    );
  } else {
    data.environmentStore.setMainButtonText("Download Album");
  }

  onMount(() => {
    data.environmentStore.showMainButton("Download Album");
    data.environmentStore.setMainButtonCallback(request);
  });

  onDestroy(() => {
    data.environmentStore.hideMainButton();
  });
</script>

<div class="album-entry">
  <img class="artwork" src={data.albumStore.imageUrl} alt="cover" />
  <div class="headings">
    <h3 class="title">
      {data.albumStore.title}
    </h3>
    <p>{data.albumStore.author}</p>
  </div>
  {#await data.streamed.tracks}
    <Placeholder count={8} _class="album-entry track-list mt-0" />
  {:then tracks}
    <ul class="track-list">
      {#each tracks as record}
        <li>
          <button
            class="track"
            on:click={() => addOrRemove(record.youTubeMusicPlaylistUrl)}
          >
            <p>{record.title}</p>
          </button>
          {#if selected.includes(record.youTubeMusicPlaylistUrl)}
            <img src={`${base}/check-circle.svg`} alt="check" class="h-5 w-5" />
          {/if}
        </li>
      {/each}
    </ul>
  {/await}
</div>
