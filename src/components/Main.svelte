<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./searcher/Content.svelte";
  import FilterSelector from "./searcher/FilterSelector.svelte";
  import {
    RequestType,
    type MusicQueryRequest,
  } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { base } from "$app/paths";

  let searchQuery: MusicQueryRequest = "";
  let requestType = RequestType.Album;
  let keyObject = {
    searchQuery: "",
    requestType: "",
  };

  $: {
    keyObject.requestType = requestType;
    keyObject.searchQuery = searchQuery;
    keyObject = keyObject;
  }
</script>

<div class="top-bar">
  <Searchbar on:search={(event) => (searchQuery = event.detail.value)} />
  <FilterSelector
    on:changeRequestType={(event) => (requestType = event.detail.value)}
    {requestType}
  />
</div>

{#if searchQuery}
  {#key keyObject}
    <Content query={searchQuery} {requestType} />
  {/key}
{:else}
  <div class="content-in-center">
    <img src="{base}/logo.png" alt="logo" class="drop-shadow-2xl" />
  </div>
{/if}
