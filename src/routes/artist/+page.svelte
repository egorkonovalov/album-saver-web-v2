<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import RecordCard from "../../components/elements/RecordCard.svelte";
  import { ChevronRight } from "../../components/icons/Icons";
  import Placeholder from "../../components/utils/Placeholder.svelte";
  import { getLayoutType } from "../../components/utils/Utils";

  type Data = {
    tracks: Record[];
    albums: Record[];
  };
  export let data: Data;

  let layout = getLayoutType(RequestType.Track);
</script>

<div class="dark:text-white">
  <div class="m-4">
    <h1 class="text-xl font-medium">Some Artist</h1>
  </div>
  <section>
    <a href="/album" class="px-4 btn btn--icon"
      >Top tracks{@html ChevronRight}</a
    >
    {#if !data.tracks.length}
      <Placeholder count={5} {layout} _class={"mt-0"} />
    {:else}
      <ul class="track-list artist">
        {#each data.tracks as record}
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
      {#each data.albums as record}
        <RecordCard requestType={RequestType.ArtistAlbums} {record} />
      {/each}
    </div>
  </section>
</div>
