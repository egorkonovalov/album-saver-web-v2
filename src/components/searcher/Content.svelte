<script lang="ts">
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import {
    RequestType,
    type MusicQueryRequest,
  } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import RecordCard from "./RecordCard.svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import GridPlaceholder from "../utils/GridPlaceholder.svelte";
  import ListPlaceholder from "../utils/ListPlaceholder.svelte";
  import LoadinWheel from "../utils/LoadinWheel.svelte";
  import { onMount } from "svelte";

  export let query: MusicQueryRequest;
  export let requestType: RequestType;

  let queryCopy = query;
  let data: Record[] = [];
  let newBatch: Record[] = [];
  let loadingMore = false;

  $: data = [...data, ...newBatch];

  async function fetchData() {
    newBatch = await SearchRequestController.getRecords(queryCopy);
    loadingMore = false;
  }

  function handleLoadMore() {
    loadingMore = true;
    queryCopy.page++;
    fetchData();
  }

  onMount(() => {
    fetchData();
  });
</script>

{#if !data.length}
  {#if requestType === RequestType.Albums}
    <GridPlaceholder />
  {:else}
    <ListPlaceholder />
  {/if}
{:else}
  <div
    class={`${
      requestType === RequestType.Albums ? "records-grid" : "records-list"
    }`}
  >
    {#each data as record}
      <RecordCard {record} {requestType} />
    {/each}
    {#if loadingMore}
      <div class="col-span-2 h-4">
        <LoadinWheel />
      </div>
    {/if}
  </div>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{/if}
