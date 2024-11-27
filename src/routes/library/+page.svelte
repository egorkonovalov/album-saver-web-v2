<script lang="ts">
  import AlbumGrid from "$components/elements/AlbumGrid.svelte";
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

{#await data.streamed.records then records}
  <AlbumGrid records={JSON.parse(records)}></AlbumGrid>
{/await}
