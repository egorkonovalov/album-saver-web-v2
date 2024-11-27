import telegramService from "$lib/modules/platformenvironment/telegram.service";
import type { PageLoad } from "./$types";


async function loadStorageItem(key: string) {
  const storageItem = await telegramService.getItem(key)
  return storageItem
}

export const load = (async () => {
  return {
    streamed: {
      records: loadStorageItem("library"),
    },
  }

}) satisfies PageLoad;
