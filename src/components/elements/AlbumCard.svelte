<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { album as albumStore } from "$lib/stores";

  export let album: Record;
  export let _class = "";
  const albumLink = `/album?albumUrl=${album.youTubeMusicPlaylistUrl}`;

  function handleClick() {
    albumStore.set(album);
    goto(albumLink);
  }
</script>

<a
  href={albumLink}
  on:click|preventDefault={handleClick}
  class={_class + " record"}
>
  <div class="cover" style="background-image: url({album.imageUrl})" />
  <div class="record__title-container">
    <p class="record__name">{album.title}</p>
    <p class="record__artist">
      {album.author === undefined ? "Various Artists" : album.author}
    </p>
    {#if album.recordType && album.year}
      <div class="flex gap-1 text-[11px] font-medium">
        <p>
          {album.recordType}
        </p>
        <p>•</p>
        <p>{album.year}</p>
      </div>
    {/if}
  </div>
</a>
