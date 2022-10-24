<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function searchRecord() {
    dispatch("search", {
      value: value,
    });
  }
  let value: string;
  let input: any;
</script>

<form
  on:submit|preventDefault={searchRecord}
  on:submit|preventDefault={input.blur()}
  class="form"
>
  <label class="w-full">
    <input
      bind:this={input}
      type="text"
      bind:value
      id="search_record"
      class="searchbar"
      placeholder="What do you want to listen to?"
      required
    />
  </label>
  <button
    type="submit"
    class="px-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"
    >Search</button
  >
</form>
