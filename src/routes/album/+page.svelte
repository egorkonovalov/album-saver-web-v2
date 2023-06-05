<script lang="ts">
  import type { PageData } from "./$types";
  import Placeholder from "../../components/utils/Placeholder.svelte";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
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
    data.environment.envokeHaptic("light");
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
    data.environment.envokeHaptic("heavy");
    data.environment.close();
  }

  // $: if (selected.length > 0) {
  //   data.environment.setMainButtonText(`Download Tracks (${selected.length})`);
  // } else {
  //   data.environment.setMainButtonText(data.mainButtonText);
  // }
  onMount(() => {
    data.environment.setMainButtonCallback(request);
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
    <Placeholder count={8} _class="album-entry mt-0" />
  {:then tracks}
    <ul class="track-list">
      {#each tracks as record}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
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
