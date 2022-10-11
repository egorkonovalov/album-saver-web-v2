<script lang="ts">
  import Searchbar from "../components/Searchbar.svelte";
  import Content from "../components/Content.svelte";
  import type { MusicSearchRequest } from "$lib/modules/musicsearch/interfaces/musicsearchrequest.interface";

  let searchQuery: MusicSearchRequest = {
    query: "",
    page: 0,
  };
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
