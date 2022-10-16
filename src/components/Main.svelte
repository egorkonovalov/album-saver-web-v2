<script lang="ts">
  import Searchbar from "./searcher/Searchbar.svelte";
  import Content from "./searcher/Content.svelte";
  import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { base } from "$app/paths";

  let searchQuery: MusicQueryRequest;
  function startSearching(event: any) {
    searchQuery = { query: event.detail.value, page: 0 };
  }
</script>

<Searchbar on:search={startSearching} />

{#if searchQuery?.query}
  {#key searchQuery}
    <Content query={searchQuery} />
  {/key}
{:else}
  <div class="headphones">
    <img src="{base}/headphones.webp" alt="headphones" class="drop-shadow-xl" />
  </div>
{/if}
