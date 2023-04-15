<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./Content.svelte";
  import FilterSelector from "./searcher/FilterSelector.svelte";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import PopUp from "./elements/Popup.svelte";
  import Artist from "./Artist.svelte";
  import Album from "./Album.svelte";
  import { popupContentType, popupIsShown } from "$lib/stores";

  $: document.body.classList.toggle("noscroll", $popupIsShown);

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
  let h;
  let inputQuery = "";
  let searchQuery = "";
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

<div class="top-bar" bind:clientHeight={h}>
  <div class="flex">
    <Searchbar
      on:search={() => handleSearch()}
      on:inputQueryChange={(event) =>
        handleInputValueChange(event.detail.value)}
      on:inputFocuseChange={(event) =>
        handleInputFocusChange(event.detail.value)}
    />
  </div>
  <FilterSelector
    on:changeRequestType={(event) => changeRequestType(event.detail.value)}
    {requestType}
  />
</div>

{#key keyObject}
  <div class="content" style={`margin-top: ${h}px`}>
    <Content
      query={searchQuery}
      {requestType}
      infinitelyScrollable={isInfinitelyScrollable(requestType)}
    />
    {#if $popupIsShown}
      {#if $popupContentType === "artist"}
        <PopUp>
          <Artist />
        </PopUp>
      {:else if $popupContentType == "album"}
        <PopUp mainButtonText="Download Album">
          <Album />
        </PopUp>
      {/if}
    {/if}
  </div>
{/key}
