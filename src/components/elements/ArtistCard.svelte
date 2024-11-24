<script lang="ts">
  import { base } from "$app/paths";
  import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
  interface Props {
    artist: Record;
  }

  let { artist }: Props = $props();
</script>

<a
  href="{base}/artist?artistId={artist.youTubeMusicUrl}&artistName={artist.title}"
>
  <img src={artist.imageUrl} alt={artist.title} class="cover" />
  <div class="text-[12px]">
    <p class="font-semibold leading-tight">{artist.title}</p>
  </div>
</a>
