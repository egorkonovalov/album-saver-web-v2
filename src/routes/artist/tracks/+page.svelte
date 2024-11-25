<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "$components/elements/RecordCard.svelte";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import type { PageData } from "./$types";
  import downloaderController from "$lib/modules/downloader/downloader.controller";

  async function download(url: string) {
    await downloaderController.download(url, 2);
    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

{#await data.streamed.tracks}
  <Placeholder count={10} _class={"mt-0 track-list artist"} />
{:then value}
  <ul class="artist track-list">
    {#each value as record}
      <li class="record">
        <a
          href="/"
          onclick={(event) => {
            event.preventDefault();
            download(record.youTubeMusicPlaylistUrl);
          }}
        >
          <RecordCard requestType={RequestType.ArtistTracks} {record} />
        </a>
      </li>
    {/each}
  </ul>
{/await}
