<script lang="ts">
  import RecordCard from "./elements/RecordCard.svelte";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { artist as ArtistStore } from "$lib/stores";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { onMount } from "svelte";
  import { getLayoutType } from "./utils/Utils";
  import Placeholder from "./utils/Placeholder.svelte";
  import artistsController from "$lib/modules/artists/artists.controller";
  import { tokens } from "$lib/stores";
  import { ChevronRight } from "./icons/Icons";

  let artist: Record;
  ArtistStore.subscribe((data) => {
    artist = data;
  });
  let layout = getLayoutType(RequestType.Track);
  let tracks: Record[] = [];
  let albums: Record[] = [];
  function fetchData() {
    artistsController.getTracks(artist.youTubeMusicUrl, 5).then((result) => {
      tracks = result;
      tokens.set({});
    });
    artistsController.getAlbums(artist.youTubeMusicUrl, 4).then((result) => {
      albums = result;
      tokens.set({});
    });
  }
  onMount(() => {
    fetchData();
  });
</script>

<div class="dark:text-white">
  <div class="m-4">
    <h1 class="text-xl font-medium">{artist.title}</h1>
  </div>
  <section>
    <a href="/album" class="px-4 btn btn--icon"
      >Top tracks{@html ChevronRight}</a
    >
    {#if !tracks.length}
      <Placeholder count={5} {layout} _class={"mt-0"} />
    {:else}
      <ul class="track-list artist">
        {#each tracks as record}
          <li>
            <RecordCard requestType={RequestType.ArtistTracks} {record} />
          </li>
        {/each}
      </ul>
    {/if}
  </section>
  <section>
    <button class="px-4 btn btn--icon">Top albums{@html ChevronRight}</button>
    <div class="album-grid">
      {#each albums as record}
        <RecordCard requestType={RequestType.ArtistAlbums} {record} />
      {/each}
    </div>
  </section>
</div>
