<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { album as albumStore } from "$lib/stores";
  import { base } from "$app/paths";

  interface Props {
    album: Record;
    _class?: string;
  }

  let { album, _class = "" }: Props = $props();
  const albumLink = `${base}/album?albumUrl=${album.youTubeMusicPlaylistUrl}`;

  function handleClick() {
    albumStore.set(album);
    goto(albumLink);
  }
</script>

<a
  href={albumLink}
  onclick={(event) => {
    event.preventDefault();
    handleClick();
  }}
  class={_class + " record"}
>
  <div class="cover" style="background-image: url({album.imageUrl})"></div>
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
