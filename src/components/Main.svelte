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

  $: {
    searchQuery.page = 0;
    searchQuery.requestType = requestType;
    searchQuery = searchQuery;
  }
</script>

<div class="top-bar">
  <Searchbar on:search={(event) => (searchQuery.query = event.detail.value)} />
  <FilterSelector
    on:changeRequestType={(event) => (requestType = event.detail.value)}
    {requestType}
  />
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
