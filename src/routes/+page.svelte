<script lang="ts">
  import Searchbar from "../components/Searchbar.svelte";
  import Content from "../components/Content.svelte";
  import type { MusicSearchRequest } from "$lib/modules/musicsearch/interfaces/musicsearchrequest.interface";
  function handleOnSubmit() {
    console.log("I'm the handleOnSubmit() in App.svelte");
  }
</script>

<Searchbar on:submit={handleOnSubmit} />
