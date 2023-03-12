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
  import Banner from "./Banner.svelte";

  export let query: MusicQueryRequest;
  export let requestType: RequestType;
  export let infinitelyScrollable = false;

  let queryCopy = query;
  let data: Record[] = [];
  let newBatch: Record[] = [];
  let loadingMore = false;
  let showPlaceholder = false;
  let layout = requestType === RequestType.Track || requestType === RequestType.Artist ? "track-list" : "album-grid";

  $: data = [...data, ...newBatch];

  async function fetchData() {
    if (requestType === RequestType.Release) {
      newBatch = await SearchRequestController.getRecords(
        queryCopy,
        requestType
      );
    } else if (queryCopy) {
      newBatch = await SearchRequestController.getRecords(
        queryCopy,
        requestType
      );
      loadingMore = false;
    }
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
  <Placeholder {layout} />
{:else if data.length}
  <div class={layout}>
    {#each data as record}
      <RecordCard {record} {requestType} />
    {/each}
    {#if loadingMore}
      <LoadinWheel stylingClass={"col-span-2 h-4"} />
    {/if}
  </div>
  {#if infinitelyScrollable}
    <InfiniteScroll
      threshold={100}
      window={true}
      on:loadMore={handleLoadMore}
    />
  {/if}
{:else if !query}
  <Banner>
    <h3 class="font-medium">Play what you love</h3>
    <p>Search for artists, songs or albums</p>
  </Banner>
{:else}
  <Banner hasIcon={true}>
    <h3 class="font-medium">No results</h3>
    <p>Please try changing the query</p>
  </Banner>
{/if}
