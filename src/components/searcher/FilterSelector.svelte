<script lang="ts">
  import { blur } from "svelte/transition";
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";

  interface Selector {
    type: RequestType;
  }
  interface Props {
    requestType: RequestType;
    changeRequestType: (value: RequestType) => void;
  }

  let { changeRequestType, requestType = $bindable() }: Props = $props();
  let variants: Selector[] = [
    {
      type: RequestType.Album,
    },
    {
      type: RequestType.Track,
    },
    // {
    //   type: RequestType.Artist,
    // },
  ];
  $effect(() => changeRequestType(requestType));
</script>

{#if requestType !== RequestType.Release}
  <div class="filter" transition:blur>
    {#each variants as variant}
      <input
        type="radio"
        name="record-type"
        bind:group={requestType}
        value={variant.type}
        id={`request_${variant.type}`}
        class="hidden"
      />
      <label
        for={`request_${variant.type}`}
        class="filter-button
      {variant.type === requestType ? 'active' : ''}"
      >
        {variant.type}
      </label>
    {/each}
  </div>
{/if}
