<script lang="ts">
  import type { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";

  export let requestType: RequestType;
  export let record: Record;
</script>

<a
  href="/"
  on:click|preventDefault={async () => {
    await SearchRequestController.requestRecord(
      record.youTubeMusicPlaylistUrl,
      requestType
    );
  }}
>
  <img src={record.imageUrl} alt={record.title} />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{record.title}</p>
    {#if requestType !== "artists" }  
    <p class="font-light">
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
</a>
