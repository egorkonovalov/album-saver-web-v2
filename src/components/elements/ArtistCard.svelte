<script lang="ts">
  import { base } from "$app/paths";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  export let artist: Record;
</script>

<a
  href="${base}/artist?artistId=${artist.youTubeMusicUrl}&artistName=${artist.title}""
>
  <img src={artist.imageUrl} alt={artist.title} class="cover" />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{artist.title}</p>
  </div>
</a>
