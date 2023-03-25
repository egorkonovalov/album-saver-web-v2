<script lang="ts">
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import Placeholder from "./utils/Placeholder.svelte";
  import LoadinWheel from "./utils/LoadinWheel.svelte";
  import { onMount } from "svelte";
  import { tokens } from "$lib/stores";
  import { getLayoutType } from "./utils/Utils";
  import Banner from "./elements/Banner.svelte";
  import ArtistCard from "./elements/ArtistCard.svelte";

  export let query: string;
  export let requestType: RequestType;
  export let infinitelyScrollable = false;

  let queryCopy = query;
  let data: Record[] = [];
  let newBatch: Record[] = [];
  let loadingMore = false;
  let showPlaceholder = false;
  let layout = getLayoutType(requestType);

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
  <Placeholder {layout} cssClass={"content-margin"} />
{:else if data.length}
  <div class={layout}>
    {#each data as record}
      {#if requestType === RequestType.Artist}
        <ArtistCard artist={record} />
      {:else}
        <RecordCard {record} {requestType} />
      {/if}
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
