<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "$components/elements/RecordCard.svelte";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#await data.streamed.tracks}
  <Placeholder count={10} _class={"mt-0 track-list artist"} />
{:then value}
  <ul class="artist track-list">
    {#each value as record}
      <li>
        <RecordCard requestType={RequestType.ArtistTracks} {record} />
      </li>
    {/each}
  </ul>
{/await}
