<script lang="ts">
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  export let artist: Record;
</script>

<a
  href={`/artist?artist_id=${artist.youTubeMusicUrl}&artist_name=${artist.title}`}
  class="dark:text-white"
>
  <img src={artist.imageUrl} alt={artist.title} class="cover" />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{artist.title}</p>
  </div>
</a>
