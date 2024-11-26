<script lang="ts">
  import telegramService from "$lib/modules/platformenvironment/telegram.service";
  import { onMount } from "svelte";

  let data = $state();

  onMount(() => {
    telegramService.getKeys().then((value) => {
      data = value;
    });
  });
</script>

{data}
