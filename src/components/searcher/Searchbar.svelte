<script lang="ts">
  import { base } from "$app/paths";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function searchRecord() {
    dispatch("search", {
      value: value,
    });
  }
  let value: string;
  let input: HTMLElement;
</script>

<form
  on:submit|preventDefault={searchRecord}
  on:submit|preventDefault={input.blur}
  class="form"
>
  <div class="w-full searchbar flex items-center">
    <label class="w-full">
      <input
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
