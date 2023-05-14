<script lang="ts">
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import {
    album as AlbumStore,
    Environment as EnvironmentStore,
    mainButtonText,
  } from "$lib/stores";
  import { get } from "svelte/store";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { getLayoutType } from "./utils/Utils";
  import { base } from "$app/paths";

  const environment = get(EnvironmentStore);

  let album: Record;
  AlbumStore.subscribe((data) => {
    album = data;
  });
  let layout = getLayoutType(RequestType.Track);
  let tracks: Record[] = [];
  let selected: string[] = [];

  function addOrRemove(url: string) {
    if (!selected.includes(url)) {
      selected = [...selected, url];
    } else {
      selected.splice(selected.indexOf(url), 1);
      selected = selected;
    }
    environment.envokeHaptic("light");
  }

  async function fetchData() {
    tracks = await SearchRequestController.getRecords(
      album.youTubeMusicPlaylistUrl,
      RequestType.AlbumTracks
    );
  }

  async function request() {
    if (selected.length > 0) {
      await SearchRequestController.requestSet(selected);
    } else {
      await SearchRequestController.requestRecord(
        get(AlbumStore).youTubeMusicPlaylistUrl,
        RequestType.Album
      );
    }
    environment.envokeHaptic("heavy");
    environment.close();
  }

  $: if (selected.length > 0) {
    environment.setMainButtonText(`Download Tracks (${selected.length})`);
  } else {
    environment.setMainButtonText(get(mainButtonText));
  }
  $: data = [...tracks];
  onMount(async () => {
    environment.setMainButtonCallback(request);
    await fetchData();
  });
</script>

<div class="dark:text-white flex flex-col">
  <img
    class="w-2/3 self-center rounded-lg shadow-lg"
    src={album.imageUrl}
    alt="cover"
  />
  <div class="m-4 grid text-center">
    <h3 class="text-l font-medium">
      {album.title}
    </h3>
    <p>{album.author}</p>
  </div>
  {#if !data.length}
    <Placeholder {layout} _class={"mt-0"} />
  {:else}
    <ul class={`${layout} album`}>
      {#each data as record}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li on:click={() => addOrRemove(record.youTubeMusicPlaylistUrl)}>
          <RecordCard
            requestType={RequestType.Track}
            {record}
            _class="pointer-events-none"
          />
          {#if selected.includes(record.youTubeMusicPlaylistUrl)}
            <img src={`${base}/check-circle.svg`} alt="check" class="h-5 w-5" />
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</div>
