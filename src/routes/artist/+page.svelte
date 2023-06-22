<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "../../components/elements/RecordCard.svelte";
  import { ChevronRight } from "../../components/icons/Icons";
  import Placeholder from "../../components/utils/Placeholder.svelte";
  import type { PageData } from "./$types";
  import AlbumCard from "../../components/elements/AlbumCard.svelte";
  export let data: PageData;
</script>


  <div class="m-4">
    <h1 class="text-xl font-medium">{data.artistName}</h1>
  </div>
  <section>
    <a
      href={`/artist/tracks?artistId=${data.artistId}`}
      class="text-xl px-4 btn btn--icon">Top Tracks{@html ChevronRight}</a
    >
    {#await data.streamed.tracks}
      <Placeholder count={3} _class={"mt-0 track-list artist"} />
    {:then value}
      <ul class="artist track-list conveyer">
        {#each value as record}
          <li>
            <RecordCard requestType={RequestType.ArtistTracks} {record} />
          </li>
        {/each}
      </ul>
    {/await}
  </section>
  <section>
    <a
      href={`/artist/albums?artistId=${data.artistId}`}
      class="px-4 btn btn--icon">Albums{@html ChevronRight}</a
    >
    {#await data.streamed.albums}
      <Placeholder count={6} />
    {:then value}
      <ul class="albums-conveyer">
        {#each value as album}
          <li>
            <AlbumCard {album} />
          </li>
        {/each}
      </ul>
    {/await}
  </section>
