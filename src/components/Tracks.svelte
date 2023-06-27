<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import tracksController from "$lib/modules/tracks/tracks.controller";
  import InfiniteScroll from "svelte-infinite-scroll";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { onMount } from "svelte";

  export let query: string;

  async function fetchData() {
    return await tracksController.getTracks(query);
  }

  async function handleLoadMore() {
    loadingMore = true;
    newBatch = await fetchData();
    loadingMore = false;
  }

  let newBatch: Record[] = [];
  let data: Record[];
  let loadingMore = false;
  let showPlaceholder = false;
  $: data = [...data, ...newBatch];

  onMount(async () => {
    showPlaceholder = true;
    data = await fetchData();
    showPlaceholder = false;
  });
</script>

{#if showPlaceholder}
  <Placeholder count={4} _class="track-list" />
{:else if data}
  <div class="track-list">
    {#each data as record}
      <a href="/" class="record">
        <RecordCard {record} requestType={RequestType.Track} />
      </a>
    {/each}
  </div>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{/if}
