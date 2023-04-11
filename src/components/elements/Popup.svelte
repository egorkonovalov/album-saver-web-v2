<script>
  import { onMount, onDestroy } from "svelte";
  import { fly } from "svelte/transition";
  import { clickOutside } from "../utils/Utils";
  import { Environment as EnvironmentStore, popupIsShown } from "$lib/stores";
  import { mainButtonText as mainButtonTextStore } from "$lib/stores";
  import { get } from "svelte/store";
  export let mainButtonText = "";

  function closePopUp() {
    popupIsShown.update((status) => (status = false));
  }
  const environment = get(EnvironmentStore);
  environment.onBackButtonClick(closePopUp);

  onMount(() => {
    if (mainButtonText.length > 0) {
      mainButtonTextStore.set(mainButtonText);
      environment.showMainButton(mainButtonText);
    }
    environment.showBackButton();
  });

  onDestroy(() => {
    environment.hideMainButton();
  });
</script>

<div use:clickOutside transition:fly={{ y: 500, duration: 300 }} class="popup">
  <slot />
</div>
