<script lang="ts">
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import { PlatformEnvironmentService } from "$lib/modules/platformenvironment/platformenvironment.service";
  import Main from "../components/Main.svelte";
  import { Environment as EnvironmentStore } from "$lib/stores";
  import { isDev } from "$lib/utils/IsDev";

  async function getEnvironment() {
    let environment = PlatformEnvironmentService.getEnvironment();
    EnvironmentStore.set(environment);
    return environment;
  }
</script>

{#await getEnvironment() then environment}
  {#if environment instanceof TelegramEnvironment || isDev()}
    <Main />
  {:else}
    <p class="w-full text-center p-10 font-semibold leading-loose">
      You can use this website only with a<br /><a
        class="text-blue-700 underline"
        href={import.meta.env.VITE_API_TG_URL}>Telegram bot</a
      >
    </p>
  {/if}
{/await}
