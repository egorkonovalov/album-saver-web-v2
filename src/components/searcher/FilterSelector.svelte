<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
  interface Selector {
    type: RequestType;
  }
  export let requestType: RequestType;
  let requestTypeCopy = requestType;
  let variants: Selector[] = [
    {
      type: RequestType.Albums,
    },
    {
      type: RequestType.Tracks,
    },
  ];
  $: {
    dispatch("changeRequestType", {
      value: requestTypeCopy,
    });
  }
</script>

<div class="filter">
  {#each variants as variant}
    <input
      type="radio"
      name="record-type"
      bind:group={requestTypeCopy}
      value={variant.type}
      id={`request_${variant.type}`}
      class="hidden"
    />
    <label
      for={`request_${variant.type}`}
      class="filter-button
      {variant.type === requestTypeCopy ? 'active' : ''}"
    >
      {variant.type}
    </label>
  {/each}
</div>
