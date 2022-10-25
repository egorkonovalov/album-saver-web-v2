<script lang="ts">
  import type { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";

  export let requestType: RequestType;
  export let record: Record;
  let telegram = Telegram;
</script>

<a
  href="/"
  on:click|preventDefault={async () => {
    await SearchRequestController.requestRecord(
      record.youTubeMusicPlaylistUrl,
      requestType
    );
    telegram.WebApp.close();
  }}
>
  <img src={record.imageUrl} alt={record.title} />
  <div>
    <p class="text-[12px] font-semibold leading-tight">{record.title}</p>
    <p class="text-[12px] font-light">{record.author}</p>
  </div>
</a>
