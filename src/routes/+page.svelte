<script lang="ts">
  import Searchbar from "$components/searcher/Searchbar.svelte";
  import FilterSelector from "$components/searcher/FilterSelector.svelte";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import Releases from "$components/Releases.svelte";
  import Albums from "$components/Albums.svelte";
  import Tracks from "$components/Tracks.svelte";
  import Artists from "$components/Artists.svelte";
  import tokensController from "$lib/modules/tokens/tokens.controller";
  import { TOKEN_NAMES } from "$lib/constants";
  import { onDestroy } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

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
    tokensController.clearTokens(TOKEN_NAMES);
    keyObject.searchQuery = searchQuery;
    keyObject.requestType = requestType;
    keyObject = keyObject;
  }
  onDestroy(() => tokensController.clearTokens(TOKEN_NAMES));
</script>

<div class="top-bar" bind:clientHeight={h}>
  <div class="flex">
    <Searchbar
      on:search={(event) => (searchQuery = event.detail.value)}
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
  <div class="content" style="margin-top: {h}px">
    {#if keyObject.searchQuery !== ""}
      {#if keyObject.requestType === RequestType.Album}
        <Albums query={keyObject.searchQuery} />
      {:else if keyObject.requestType === RequestType.Track}
        <Tracks
          query={keyObject.searchQuery}
          environment={data.environmentStore}
        />
      {:else if keyObject.requestType === RequestType.Artist}
        <Artists query={keyObject.searchQuery} />
      {/if}
    {:else if keyObject.requestType === RequestType.Release}
      <Releases />
    {/if}
  </div>
{/key}
