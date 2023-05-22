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
    <div class="mx-4 flex">
      <button>Top tracks ></button>
    </div>
    {#if !tracks.length}
      <Placeholder {layout} _class={"mt-0"} />
    {:else}
      <ul class="track-list artist">
        {#each tracks as record}
          <li>
            <RecordCard requestType={RequestType.Track} {record} />
          </li>
        {/each}
      </ul>
    {/if}
  </section>
  <section>
    <button>Top albums ></button>
    <div class="album-grid">
      {#each albums as record}
        <RecordCard requestType={RequestType.Album} {record} />
      {/each}
    </div>
  </section>
</div>
