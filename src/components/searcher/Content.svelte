<script lang="ts">
  import InfiniteScroll from "svelte-infinite-scroll";
  import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import Placeholder from "./Placeholder.svelte";
  import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";
  import { onMount } from "svelte";

  export let query: MusicQueryRequest;

  let telegram = Telegram;
  let queryCopy = query;
  let data: Album[] = [];
  let newBatch: Album[] = [];

  async function fetchData() {
    newBatch = await SearchRequestController.getAlbums(queryCopy);
  }

  $: data = [...data, ...newBatch];

  onMount(() => {
    fetchData();
  });
</script>

<div class="grid grid-cols-2 p-4 gap-4 max-h-[63rem] overflow-x-scroll">
  {#each data as { youTubeMusicPlaylistUrl, title, imageUrl }}
    <a
      href="/"
      class="flex flex-col gap-2 cursor-pointer"
      on:click|preventDefault={async (e) => {
        await SearchRequestController.requestAlbum(youTubeMusicPlaylistUrl);
        telegram.WebApp.close();
      }}
    >
      <img src={imageUrl} alt={title} class="w-full rounded-lg" />
      <p class="truncate dark:text-white">{title}</p>
    </a>
  {/each}
  <InfiniteScroll
    threshold={100}
    on:loadMore={() => {
      console.log("got there!");
      queryCopy.page++;
      fetchData();
    }}
  />
</div>
