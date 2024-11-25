import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service";
import type { LayoutLoad } from "./$types";
export const ssr = false;
export const prerender = true

export const load = (({ route }) => {
  try {
    platformEnvironmentService.init(route.id)
  } catch (e) {
    alert(e)
  }
}) satisfies LayoutLoad;
