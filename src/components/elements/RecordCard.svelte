<script lang="ts">
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { album as albumStore } from "$lib/stores";
  import { onDestroy } from "svelte";

  export let requestType: RequestType;
  export let record: Record;
  onDestroy(() => albumStore.update(() => ({} as Record)));
</script>

<div class="cover" style="background-image: url({record.imageUrl})" />
<div class="record__title-container">
  <p class="record__name">{record.title}</p>
  {#if requestType !== RequestType.Artist}
    <p class="record__artist">
      {record.author === undefined ? "Various Artists" : record.author}
    </p>
  {/if}
  {#if requestType === "albums"}
    <div class="flex gap-1 text-[11px] font-medium">
      {#if record.recordType}
        <p>
          {record.recordType ? record.recordType : "Album"}
        </p>
        <p>•</p>
      {/if}
      <p>{record.year}</p>
    </div>
  {/if}
</div>
