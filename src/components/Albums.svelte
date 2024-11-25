<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import albumsController from "$lib/modules/albums/albums.controller";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { onMount } from "svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import LoadinWheel from "./utils/LoadinWheel.svelte";
  import { base } from "$app/paths";

  interface Props {
    query: string;
  }

  let { query }: Props = $props();

  const fetchData = async () => await albumsController.getAlbums(query);

  async function handleLoadMore() {
    loadingMore = true;
    newBatch = await fetchData();
    data.push(...newBatch);
    loadingMore = false;
  }

  let newBatch: Record[] = $state([]);
  let data: Record[] = $state([]);
  let loadingMore = $state(false);
  let showPlaceholder = $state(false);

  onMount(async () => {
    showPlaceholder = true;
    await handleLoadMore();
    showPlaceholder = false;
  });
</script>

{#if showPlaceholder}
  <Placeholder count={4} _class="album-grid" />
{:else if data.length}
  <div class="album-grid">
    {#each data as record}
      <a
        href="{base}/album?albumUrl=${record.youTubeMusicPlaylistUrl}"
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
