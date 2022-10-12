<script lang="ts">
  import { onMount } from "svelte";
  import type { TelegramWebApps } from "telegram-webapps-types";
  import Main from "../components/Main.svelte";
  let telegram: TelegramWebApps.SDK;
  onMount(async () => {
    telegram = Telegram;
  });
</script>

{#if telegram?.WebApp.initData}
  <Main />
{:else}
  <p class="w-full text-center p-10 font-semibold leading-loose">
    You can use this website only with a<br /><a
      class="text-blue-700 underline"
      href="https://t.me/album_saver_web_tes_bot">Telegram bot</a
    >
  </p>
{/if}
