<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function searchAlbum() {
    dispatch("search", {
      value: value,
    });
  }
  let value: string;
  let input: any;
</script>

<form
  on:submit|preventDefault={searchAlbum}
  on:submit|preventDefault={input.blur()}
  class="form"
>
  <label class="w-full">
    <input
      bind:this={input}
      type="text"
      bind:value
      id="search_album"
      class="bg-gray-100 h-full text-gray-900 text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
