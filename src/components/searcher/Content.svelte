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
  import { tokens } from "$lib/stores";
  import { base } from "$app/paths";

  export let query: MusicQueryRequest;
  export let requestType: RequestType;

  let queryCopy = query;
  let data: Record[] = [];
  let newBatch: Record[] = [];
  let loadingMore = false;
  let showPlaceholder = false;

  $: data = [...data, ...newBatch];

  async function fetchData() {
    newBatch = await SearchRequestController.getRecords(queryCopy, requestType);
    loadingMore = false;
  }

  function handleLoadMore() {
    loadingMore = true;
    fetchData();
  }

  onMount(async () => {
    showPlaceholder = true;
    tokens.set({});
    await fetchData();
    showPlaceholder = false;
  });
</script>

{#if showPlaceholder}
  {#if requestType === RequestType.Albums}
    <GridPlaceholder />
  {:else}
    <ListPlaceholder />
  {/if}
{:else if data.length}
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
{:else}
  <div class="content-in-center flex flex-col gap-3 dark:text-white">
    <img src="{base}/search.svg" alt="search" class="dark:invert" />
    <div class="flex flex-col text-center">
      <h3 class="font-medium">No results</h3>
      <p>Please try changing the query</p>
    </div>
  </div>
{/if}
