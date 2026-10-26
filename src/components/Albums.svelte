<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "./elements/RecordCard.svelte";
  import Placeholder from "./utils/Placeholder.svelte";
  import albumsController from "$lib/modules/albums/albums.controller";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { createEventDispatcher, onMount } from "svelte";
  import { get } from "svelte/store";
  import InfiniteScroll from "svelte-infinite-scroll";
  import LoadinWheel from "./utils/LoadinWheel.svelte";
  import { base } from "$app/paths";
  import { albumSearchCache } from "$lib/stores";
  import tokensController from "$lib/modules/tokens/tokens.controller";
  import { TOKEN_NAMES } from "$lib/constants";

  export let query: string;

  const dispatch = createEventDispatcher<{ ready: void }>();

  async function fetchData() {
    return await albumsController.getAlbums(query);
  }

  async function handleLoadMore() {
    loadingMore = true;
    try {
      data = [...data, ...(await fetchData())];
      cacheResults();
    } finally {
      loadingMore = false;
    }
  }

  function cacheResults() {
    albumSearchCache.set({
      query,
      records: data,
      tokens: tokensController.getTokens(TOKEN_NAMES),
    });
  }

  let data: Record[] = [];
  let loadingMore = false;
  let showPlaceholder = false;

  onMount(async () => {
    const cached = get(albumSearchCache);
    if (cached?.query === query) {
      data = cached.records;
      if (cached.tokens) tokensController.tokens = cached.tokens;
      dispatch("ready");
      return;
    }

    showPlaceholder = true;
    try {
      data = await fetchData();
      cacheResults();
    } finally {
      showPlaceholder = false;
      dispatch("ready");
    }
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
