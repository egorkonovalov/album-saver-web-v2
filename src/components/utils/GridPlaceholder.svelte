<div class="grid grid-cols-2 p-4 placeholder gap-4 animate-pulse album-list">
  {#each Array(8) as _}
    <div class="flex flex-col gap-2 h-48 w-full">
      <div class="bg-gray-200 dark:bg-stone-700 h-full w-full rounded-lg" />
      <div class="flex flex-col  gap-2 justify-center">
        <p class="bg-gray-200 dark:bg-stone-700 h-2 w-24 rounded-lg" />
        <p class="bg-gray-200 dark:bg-stone-700 h-2 w-16 rounded-lg" />
      </div>
    </div>
  {/each}
</div>
