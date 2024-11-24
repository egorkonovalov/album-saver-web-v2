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

  interface Props {
    data: PageData;
  }

  const { data }: Props = $props();

  const changeRequestType = (type: RequestType) => (requestType = type);

  function handleInputFocusChange(focus: boolean) {
    if (focus) {
      requestType === RequestType.Release
        ? changeRequestType(RequestType.Album)
        : null;
    } else {
      query === undefined || "" ? requestType === RequestType.Release : null;
    }
  }
  function handleInputValueChange(inputValue: string) {
    inputQuery = inputValue;
    if (!inputQuery) {
      query = "";
      requestType = RequestType.Release;
    } else if (requestType === RequestType.Release) {
      requestType = RequestType.Album;
    }
  }

  let height = $state();
  let inputQuery = "";
  let query = $state("");
  let requestType = $state(RequestType.Release);

  $effect(() => {
    inputQuery = inputQuery;
    requestType = requestType;
    tokensController.clearTokens(TOKEN_NAMES);
  });
  onDestroy(() => tokensController.clearTokens(TOKEN_NAMES));
</script>

<div class="top-bar" bind:clientHeight={height}>
  <div class="flex">
    <Searchbar
      search={(value: string) => (query = value)}
      changeInputQuery={handleInputValueChange}
      changeInputFocuse={handleInputFocusChange}
    />
  </div>
  <FilterSelector {changeRequestType} {requestType} />
</div>

{#key () => {
  return { query, requestType };
}}
  <div class="content" style="margin-top: {height}px">
    {#if query !== ""}
      {#if requestType === RequestType.Album}
        <Albums {query} />
      {:else if requestType === RequestType.Track}
        <Tracks {query} environment={data.environmentStore} />
      {:else if requestType === RequestType.Artist}
        <Artists {query} />
      {/if}
    {:else if requestType === RequestType.Release}
      <Releases />
    {/if}
  </div>
{/key}
