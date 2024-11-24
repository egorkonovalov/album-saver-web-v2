<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import RecordCard from "$components/elements/RecordCard.svelte";
  import { ChevronRight } from "$components/icons/Icons";
  import Placeholder from "$components/utils/Placeholder.svelte";
  import type { PageData } from "./$types";
  import AlbumCard from "$components/elements/AlbumCard.svelte";
  import downloaderController from "$lib/modules/downloader/downloader.controller";
  import { base } from "$app/paths";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();

  async function download(url: string) {
    await downloaderController.download(url, 2);
    data.environmentStore.envokeHaptic("heavy");
    data.environmentStore.close();
  }
</script>

{#await data.streamed.artistImage}
  <div class="h-[10rem] animate-pulse bg-stone-200 w-full mb-4"></div>
{:then value}
  <div class="artist-header" style="background-image: url({value})">
    <h1 class="name">{data.artistName}</h1>
  </div>
{/await}
<section>
  <a
    href="{base}/artist/tracks?artistId=${data.artistId}"
    class="text-xl px-4 btn btn--icon">Top Tracks{@html ChevronRight}</a
  >
  {#await data.streamed.tracks}
    <Placeholder count={3} _class={"mt-0 track-list artist"} />
  {:then value}
    <ul class="artist track-list conveyer">
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
</section>
<section>
  <a
    href="{base}/artist/albums?artistId=${data.artistId}"
    class="px-4 btn btn--icon">Albums{@html ChevronRight}</a
  >
  {#await data.streamed.albums}
    <Placeholder count={6} _class={"album-grid conveyer"} />
  {:then value}
    {#if value.length}
      <ul class="album-grid conveyer">
        {#each value as album}
          <li>
            <AlbumCard {album} />
          </li>
        {/each}
      </ul>
    {/if}
  {/await}
</section>
