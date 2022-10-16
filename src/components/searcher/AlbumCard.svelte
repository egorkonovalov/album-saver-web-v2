<script lang="ts">
  import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";

  export let album: Album;
  let telegram = Telegram;
</script>

<a
  href="/"
  class="flex flex-col gap-2 cursor-pointer"
  on:click|preventDefault={async (e) => {
    await SearchRequestController.requestAlbum(album.youTubeMusicPlaylistUrl);
    telegram.WebApp.close();
  }}
>
  <img src={album.imageUrl} alt={album.title} class="w-full rounded-lg" />
  <p class="truncate dark:text-white">{album.title}</p>
</a>
