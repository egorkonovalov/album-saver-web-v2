<script lang="ts">
  import { base } from "$app/paths";
  import { createEventDispatcher, onMount } from "svelte";
  import { searchState } from "$lib/stores";

  function searchRecord() {
    input.blur();
    dispatch("search", { value });
  }

  function clearSearch() {
    value = "";
    // Also clear the persistent state
    searchState.update(state => ({
      ...state,
      inputQuery: "",
      searchQuery: ""
    }));
  }

  const dispatch = createEventDispatcher();
  let value: string;
  let input: HTMLElement;
  let inFocuse = false;

  // Initialize value from the store on mount and keep it reactive
  onMount(() => {
    value = $searchState.inputQuery;
  });

  // Keep value in sync with the store when navigating back
  $: if ($searchState.inputQuery !== undefined && !inFocuse) {
    value = $searchState.inputQuery;
  }

  $: {
    dispatch("inputQueryChange", { value });
  }
  $: {
    dispatch("inputFocuseChange", { value: inFocuse });
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
        on:click={clearSearch}
        type="reset"
        value=""
        style="background: url({base}/close.svg)"
        class="w-4 h-4"
      />
    {/if}
  </div>
</form>
