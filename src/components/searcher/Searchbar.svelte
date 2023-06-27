<script lang="ts">
  import { base } from "$app/paths";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let value: string;

  function searchRecord() {
    input.blur();
    dispatch("search", {
      value: value,
    });
  }

  let input: HTMLElement;
  let inFocuse = false;
  $: {
    dispatch("inputQueryChange", {
      value: value,
    });
  }
  $: {
    dispatch("inputFocuseChange", {
      value: inFocuse,
    });
  }
</script>

<form on:submit|preventDefault={searchRecord} class="form">
  <div class="w-full searchbar flex items-center">
    <label class="w-full">
      <input
        on:focus={() => (inFocuse = true)}
        on:blur={() => (inFocuse = false)}
        bind:this={input}
        type="search"
        bind:value
        id="search_record"
        class="bg-transparent w-full border-none outline-0"
        placeholder="What do you want to listen to?"
        required
      />
    </label>
    {#if value}
      <input
        on:click={() => (value = "")}
        type="reset"
        value=""
        style="background: url({base}/close.svg)"
        class="w-4 h-4"
      />
    {/if}
  </div>
</form>
