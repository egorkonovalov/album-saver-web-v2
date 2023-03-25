<script>
  import { fly } from "svelte/transition";
  import { clickOutside } from "../utils/Utils";
  import { popupIsShown } from "$lib/stores";
  function handleClickOutside() {
    popupIsShown.update((status) => (status = false));
  }
</script>

<div
  use:clickOutside
  on:click_outside={handleClickOutside}
  transition:fly={{ y: 200, duration: 500 }}
  class="popup"
>
  <slot />
</div>
