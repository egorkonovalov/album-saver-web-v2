import telegramService from "$lib/modules/platformenvironment/telegram.service";
import type { LayoutLoad } from "./$types";
export const ssr = false;
export const prerender = true

export const load = (({ route }) => {
  try {
    telegramService.init(route.id)
  } catch (e) {
    alert(e)
  }
}) satisfies LayoutLoad;
