<script lang="ts">
  import Placeholder from "./utils/Placeholder.svelte";
  import albumsController from "$lib/modules/albums/albums.controller";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { onMount } from "svelte";
  import InfiniteScroll from "svelte-infinite-scroll";
  import LoadinWheel from "./utils/LoadinWheel.svelte";
  import AlbumGrid from "./elements/AlbumGrid.svelte";

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
  <AlbumGrid records={data}>
    {#if loadingMore}
      <LoadinWheel stylingClass={"col-span-2 h-4"} />
    {/if}
  </AlbumGrid>
  <InfiniteScroll threshold={100} window={true} on:loadMore={handleLoadMore} />
{/if}
