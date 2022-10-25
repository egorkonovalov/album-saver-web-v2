<script lang="ts">
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import { PlatformEnvironmentService } from "$lib/modules/platformenvironment/platformenvironment.service";
  import Main from "../components/Main.svelte";

  async function getEnvironment() {
    return PlatformEnvironmentService.getEnvironment();
  }
</script>

{#await getEnvironment() then environment}
  {#if !(environment instanceof TelegramEnvironment)}
    <Main />
  {:else}
    <p class="w-full text-center p-10 font-semibold leading-loose">
      You can use this website only with a<br /><a
        class="text-blue-700 underline"
        href="https://t.me/album_saver_web_tes_bot">Telegram bot</a
      >
    </p>
  {/if}
{/await}
