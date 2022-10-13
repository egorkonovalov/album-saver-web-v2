<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./searcher/Content.svelte";
  import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";

  let searchQuery: MusicQueryRequest = { query: "", page: 0 };
  function startSearching(event: any) {
    searchQuery.query = "";
    searchQuery.query = event.detail.value;
    searchQuery = searchQuery;
  }
</script>

<Searchbar on:search={startSearching} />

{#if searchQuery.query}
  {#key searchQuery.query}
    <Content query={searchQuery} />
  {/key}
{/if}
