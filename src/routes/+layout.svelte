<script lang="ts">
  import { TelegramEnvironment } from "$lib/modules/platformenvironment/classes/TelegramEnvironment.class";
  import "../app.css";
  import { onMount } from "svelte";
  import type { LayoutData } from "./$types";

  interface Props {
    data: LayoutData;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();

  onMount(() => {
    data.environmentStore.onBackButtonClick(() => window.history.back());
  });
</script>

{#if data.environmentStore instanceof TelegramEnvironment}
  {@render children?.()}
{:else}
  <p class="w-full text-center p-10 font-semibold leading-loose">
    You can use this website only with a<br /><a
      class="text-blue-700 underline"
      href={import.meta.env.VITE_API_TG_URL}>Telegram bot</a
    >
  </p>
{/if}
