<div class="flex flex-col p-4 placeholder gap-4 animate-pulse records-list">
  {#each Array(8) as _}
    <div class="flex flex-row gap-2 w-full">
      <span class="bg-gray-200 dark:bg-stone-700 w-14 h-14 rounded" />
      <div class="flex flex-col gap-2 justify-center">
        <p class="bg-gray-200 dark:bg-stone-700 h-2 w-24 rounded-lg" />
        <p class="bg-gray-200 dark:bg-stone-700 h-2 w-16 rounded-lg" />
      </div>
    </div>
  {/each}
</div>
