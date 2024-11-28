<script lang="ts">
  import RecordCard from "./RecordCard.svelte";
  import { type Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import { base } from "$app/paths";

  interface Props {
    records: Record[];
    children?: import("svelte").Snippet;
  }

  let { records, children }: Props = $props();
</script>

<div class="album-grid">
  {#each records as record}
    <a
      href="{base}/album?albumUrl={record.youTubeMusicPlaylistUrl}"
      class="record"
    >
      <RecordCard {record} requestType={RequestType.Album} />
    </a>
  {/each}
  {@render children?.()}
</div>
