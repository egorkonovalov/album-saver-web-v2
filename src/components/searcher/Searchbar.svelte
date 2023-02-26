<script lang="ts">
  import { base } from "$app/paths";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let value: string;
  function searchRecord() {
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

<form
  on:submit|preventDefault={searchRecord}
  on:submit|preventDefault={input.blur}
  class="form"
>
  <div class="w-full searchbar flex items-center">
    <label class="w-full">
      <input
        on:focus={() => (inFocuse = true)}
        on:blur={() => (inFocuse = false)}
        bind:this={input}
        type="text"
        bind:value
        id="search_record"
        class="bg-transparent w-full border-none outline-0"
        placeholder="What do you want to listen to?"
        required
      />
    </label>
    {#if value}
      <img
        on:click={() => (value = "")}
        src="{base}/close.svg"
        alt="close"
        class="dark:invert"
      />
    {/if}
  </div>
  <button
    type="submit"
    class="px-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"
    >Search</button
  >
</form>
