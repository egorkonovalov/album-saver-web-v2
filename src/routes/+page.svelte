<script lang="ts">
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import Main from "$components/Main.svelte";
  import { isDev } from "$lib/utils/IsDev";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

{#if data.environmentStore instanceof TelegramEnvironment || isDev()}
  <Main />
{:else}
  <p class="w-full text-center p-10 font-semibold leading-loose">
    You can use this website only with a<br /><a
      class="text-blue-700 underline"
      href={import.meta.env.VITE_API_TG_URL}>Telegram bot</a
    >
  </p>
{/if}
