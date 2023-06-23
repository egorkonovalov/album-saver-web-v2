<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "$components/elements/RecordCard.svelte";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#await data.streamed.albums}
  <Placeholder count={10} _class={"mt-0 album-grid"} />
{:then value}
  <ul class="album-grid">
    {#each value as record}
      <li>
        <RecordCard requestType={RequestType.AlbumTracks} {record} />
      </li>
    {/each}
  </ul>
{/await}
