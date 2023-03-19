<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./Content.svelte";
  import FilterSelector from "./searcher/FilterSelector.svelte";
  import {
    RequestType,
    type MusicQueryRequest,
  } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";

  function isInfinitelyScrollable(requestType: RequestType) {
    switch (requestType) {
      case RequestType.Album:
      case RequestType.Track:
        return true;
      case RequestType.Artist:
      case RequestType.Release:
      default:
        return false;
    }
  }

  function handleSearch() {
    searchQuery = inputQuery;
  }
  function changeRequestType(type: RequestType) {
    requestType = type;
  }
  function handleInputFocusChange(focus: boolean) {
    if (focus) {
      requestType === RequestType.Release
        ? changeRequestType(RequestType.Album)
        : null;
    } else {
      searchQuery === undefined || ""
        ? requestType === RequestType.Release
        : null;
    }
  }
  function handleInputValueChange(inputValue: string) {
    inputQuery = inputValue;
    if (!inputQuery) {
      searchQuery = "";
      requestType = RequestType.Release;
    } else if (requestType === RequestType.Release) {
      requestType = RequestType.Album;
    }
  }
  let inputQuery = "";
  let searchQuery: MusicQueryRequest = "";
  let requestType = RequestType.Release;
  let keyObject = {
    searchQuery: searchQuery,
    requestType: RequestType.Release,
  };

  $: {
    keyObject.searchQuery = searchQuery;
    keyObject.requestType = requestType;
    keyObject = keyObject;
  }
</script>

<div class="top-bar">
  <Searchbar
    on:search={() => handleSearch()}
    on:inputQueryChange={(event) => handleInputValueChange(event.detail.value)}
    on:inputFocuseChange={(event) => handleInputFocusChange(event.detail.value)}
  />
  <FilterSelector
    on:changeRequestType={(event) => changeRequestType(event.detail.value)}
    {requestType}
  />
</div>

{#key keyObject}
  <Content
    query={searchQuery}
    {requestType}
    infinitelyScrollable={isInfinitelyScrollable(requestType)}
  />
{/key}
