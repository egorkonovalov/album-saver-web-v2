<script lang="ts">
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  import { SearchRequestController } from "$lib/modules/musicsearch/searchrequest.controller";

  export let record: Record;
  let telegram = Telegram;
</script>

<a
  href="/"
  on:click|preventDefault={async (e) => {
    await SearchRequestController.requestRecord(record.youTubeMusicPlaylistUrl);
    telegram.WebApp.close();
  }}
>
  <img src={record.imageUrl} alt={record.title} />
  <p>{record.title}</p>
</a>
