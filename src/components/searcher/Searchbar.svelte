<script lang="ts">
  import { base } from "$app/paths";

  const { changeInputQuery, changeInputFocuse, search } = $props();

  const searchRecord = () => {
    input?.blur();
    search(value);
  };

  let value = $state("");
  let input: HTMLElement | undefined = $state();
  let inFocuse = $state(false);

  $effect(() => changeInputQuery(value));
  $effect(() => changeInputFocuse(inFocuse));
</script>

<form onsubmit={searchRecord} class="form">
  <div class="w-full searchbar flex items-center">
    <label class="w-full">
      <input
        onfocus={() => (inFocuse = true)}
        onblur={() => (inFocuse = false)}
        bind:this={input}
        type="search"
        bind:value
        id="search_record"
        class="bg-transparent w-full border-none outline-0"
        placeholder="What do you want to listen to?"
        required
      />
    </label>
    {#if value}
      <input
        onclick={() => (value = "")}
        type="reset"
        value=""
        style="background: url({base}/close.svg)"
        class="w-4 h-4"
      />
    {/if}
  </div>
</form>
