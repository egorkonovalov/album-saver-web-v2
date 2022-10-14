<script lang="ts">
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";
  import AlbumCard from "./AlbumCard.svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import Placeholder from "./Placeholder.svelte";
  import LoadinWheel from "./LoadinWheel.svelte";
  import { onMount } from "svelte";

  export let query: MusicQueryRequest;

  let queryCopy = query;
  let data: Album[] = [];
  let newBatch: Album[] = [];

  let loadingMore = false;

  $: data = [...data, ...newBatch];

  async function fetchData() {
    newBatch = await SearchRequestController.getAlbums(queryCopy);
    loadingMore = false;
  }

  function handleLoadMore() {
    loadingMore = true;
    queryCopy.page++;
    fetchData();
  }

  onMount(() => {
    fetchData();
  });
</script>

{#if !data.length}
  <Placeholder />
{:else}
  <div class="album-list">
    {#each data as album}
      <AlbumCard {album} />
    {/each}

    <InfiniteScroll threshold={100} on:loadMore={handleLoadMore} />

    {#if loadingMore}
      <div class="col-span-2 h-5">
        <LoadinWheel />
      </div>
    {/if}
  </div>
{/if}
