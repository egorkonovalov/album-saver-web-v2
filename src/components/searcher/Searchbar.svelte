<script lang="ts">
  import { base } from "$app/paths";
  import { createEventDispatcher } from "svelte";

  export let value = "";

  function searchRecord() {
    input.blur();
    dispatch("search", { value });
  }

  function updateInputValue(event: Event) {
    value = (event.currentTarget as HTMLInputElement).value;
    dispatch("inputQueryChange", { value });
  }

  function clearSearch() {
    value = "";
    dispatch("inputQueryChange", { value });
  }

  const dispatch = createEventDispatcher();
  let input: HTMLElement;
</script>

<form on:submit|preventDefault={searchRecord} class="form">
  <div class="w-full searchbar flex items-center">
    <label class="w-full">
      <input
        on:focus={() => dispatch("inputFocuseChange", { value: true })}
        on:blur={() => dispatch("inputFocuseChange", { value: false })}
        on:input={updateInputValue}
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
