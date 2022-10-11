<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function searchAlbum() {
    dispatch("search", {
      value: searchQuery,
    });
  }
  let searchQuery: string;
</script>

<form
  on:submit|preventDefault={searchAlbum}
  class="w-full p-4 flex gap-4 justify-between"
>
  <label class="w-full">
    <input
      type="text"
      bind:value={searchQuery}
      id="search_album"
      class="bg-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="What do you want to listen to?"
      required
    />
  </label>
  <button
    type="submit"
    class="p-2.5 text-sm bg-blue-700 font-semibold text-white rounded-lg"
    >Search</button
  >
</form>
