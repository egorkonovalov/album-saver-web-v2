<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import MusicLibrary from "music-library-service";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { onMount } from "svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import LoadinWheel from "./utils/LoadinWheel.svelte";

  export let query: string;

  async function fetchData() {
    return await MusicLibrary.albums.getAlbums(query);
  }

  async function handleLoadMore() {
    loadingMore = true;
    newBatch = await fetchData();
    loadingMore = false;
  }

  let newBatch: Record[] = [];
  let data: Record[] = [];
  let loadingMore = false;
  let showPlaceholder = false;
  $: data = [...data, ...newBatch];

  onMount(async () => {
    showPlaceholder = true;
    data = await fetchData();
    showPlaceholder = false;
  });
</script>

{#if showPlaceholder}
  <Placeholder count={4} _class="album-grid" />
{:else if data.length}
  <div class="album-grid">
    {#each data as record}
      <a
        href="/album?albumUrl=${record.youTubeMusicPlaylistUrl}"
        class="record"
      >
        <RecordCard {record} requestType={RequestType.Release} />
      </a>
    {/each}
    {#if loadingMore}
      <LoadinWheel stylingClass={"col-span-2 h-4"} />
    {/if}
  </div>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{/if}
