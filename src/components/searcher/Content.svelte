<script lang="ts">
  import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";
  import Placeholder from "./Placeholder.svelte";

  export let query: MusicQueryRequest;
</script>

{#await SearchRequestController.getAlbums(query)}
  <Placeholder />
{:then albums}
  <div class="grid grid-cols-2 p-4 gap-4">
    {#each albums as { youTubeMusicPlaylistUrl, title, imageUrl }}
      <!-- svelte-ignore missing-declaration -->
      <a
        href="/"
        class="flex flex-col gap-2 cursor-pointer"
        on:click|preventDefault={async (e) => {
          await SearchRequestController.requestAlbum(youTubeMusicPlaylistUrl);
          Telegram.WebApp.close();
        }}
      >
        <img src={imageUrl} alt={title} class="w-full rounded-lg" />
        <p class="truncate">{title}</p>
      </a>
    {/each}
  </div>
{:catch error}
  <p>{error.message}</p>
{/await}
