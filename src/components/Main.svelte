<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./searcher/Content.svelte";
  import FilterSelector from "./searcher/FilterSelector.svelte";
  import {
    RequestType,
    type MusicQueryRequest,
  } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { base } from "$app/paths";

  let searchQuery: MusicQueryRequest = {
    query: "",
    page: 0,
    requestType: null,
  };
  let requestType = RequestType.Albums;

  const changeRequestType = (event: any) => (requestType = event.detail.value);
  const startSearching = (event?: any) => {
    searchQuery = {
      query: event.detail.value,
      page: 0,
      requestType: requestType,
    };
  };
  $: {
    searchQuery = {
      query: searchQuery.query,
      page: 0,
      requestType: requestType,
    };
  }
</script>

<div class="flex flex-col fixed inset-0 h-24">
  <Searchbar on:search={startSearching} />
  <FilterSelector on:changeRequestType={changeRequestType} {requestType} />
</div>

{#if searchQuery?.query}
  {#key searchQuery}
    <Content query={searchQuery} {requestType} />
  {/key}
{:else}
  <div class="headphones">
    <img src="{base}/headphones.webp" alt="headphones" class="drop-shadow-xl" />
  </div>
{/if}
