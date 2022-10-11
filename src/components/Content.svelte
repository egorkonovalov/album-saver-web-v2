<script lang="ts">
  import { QueryStringParser } from "$lib/utils/QueryStringParser.utility";
  import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
  import type { MusicSearchRequest } from "$lib/modules/musicsearch/interfaces/musicsearchrequest.interface";
  import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";
  import Placeholder from "./Placeholder.svelte";
  let data = QueryStringParser.parseString(Telegram.WebApp.initData);

  console.log(QueryStringParser.parseJson(data.user));
  export let query: MusicSearchRequest;
  async function getAlbums(): Promise<Album[]> {
    return await new MusicGetterService().getMusic(query);
  }
</script>

{#await getAlbums()}
  <Placeholder />
{:then albums}
  <div class="grid grid-cols-2 p-4 gap-4">
    {#each albums as { youTubeMusicPlaylistUrl, title, imageUrl }}
      <div class="flex flex-col gap-2">
        <img src={imageUrl} alt={title} class="w-full rounded-lg" />
        <p class="truncate">{title}</p>
      </div>
    {/each}
  </div>
{:catch error}
  <p>{error}</p>
{/await}
