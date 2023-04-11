<script lang="ts">
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  export let artist: Record;
  import {
    artist as artistStore,
    popupContentType,
    popupIsShown,
  } from "$lib/stores";
  function setPopup() {
    artistStore.set(artist);
    popupContentType.set("artist");
    popupIsShown.update((status) => (status = true));
  }
</script>

<a href="/" on:click|preventDefault={() => setPopup()} class="dark:text-white">
  <img src={artist.imageUrl} alt={artist.title} class="cover" />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{artist.title}</p>
  </div>
</a>
