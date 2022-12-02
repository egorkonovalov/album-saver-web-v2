<script lang="ts">
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import {
    RequestType,
    type MusicQueryRequest,
  } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import RecordCard from "./RecordCard.svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import Placeholder from "../utils/Placeholder.svelte";
  import LoadinWheel from "../utils/LoadinWheel.svelte";
  import { onMount } from "svelte";
  import { tokens } from "$lib/stores";
  import NoResults from "./NoResults.svelte";

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
  <Placeholder
    placeholderClass={requestType === RequestType.Albums
      ? "album-grid"
      : "track-list"}
  />
{:else if data.length}
  <div class={requestType === RequestType.Albums ? "album-grid" : "track-list"}>
    {#each data as record}
      <RecordCard {record} {requestType} />
    {/each}
    {#if loadingMore}
      <LoadinWheel stylingClass={"col-span-2 h-4"} />
    {/if}
  </div>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{:else}
  <NoResults />
{/if}
