<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import tracksController from "$lib/modules/tracks/tracks.controller";
  import InfiniteScroll from "svelte-infinite-scroll";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { onMount } from "svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";
  import type { PlatformEnvironment } from "$lib/modules/platformenvironment/interfaces/PlatformEnvironment.interface";

  interface Props {
    query: string;
    environment: PlatformEnvironment;
  }

  let { query, environment }: Props = $props();
  let newBatch: Record[] = $state([]);
  let data: Record[] = $state([]);
  let loadingMore = false;
  let showPlaceholder = $state(false);

  async function download(url: string) {
    await downloaderController.download(url, 2);
    environment.envokeHaptic("heavy");
    environment.close();
  }

  const fetchData = async () => await tracksController.getTracks(query);

  async function handleLoadMore() {
    loadingMore = true;
    newBatch = await fetchData();
    data = data.concat(newBatch);
    loadingMore = false;
  }

  onMount(async () => {
    showPlaceholder = true;
    await handleLoadMore();
    showPlaceholder = false;
  });
</script>

{#if showPlaceholder}
  <Placeholder count={4} _class="track-list" />
{:else if data.length}
  <div class="track-list">
    {#each data as record}
      <a
        href="/"
        onclick={(event) => {
          event.preventDefault();
          download(record.youTubeMusicPlaylistUrl);
        }}
        class="record"
      >
        <RecordCard {record} requestType={RequestType.Track} />
      </a>
    {/each}
  </div>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{/if}
