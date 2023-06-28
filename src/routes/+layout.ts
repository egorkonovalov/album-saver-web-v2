import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service";
import type { LayoutLoad } from "./$types";
import { Environment } from "$lib/stores";
import { get } from "svelte/store";
export const ssr = false;
export const prerender = true

export const load = (({ route }) => {
  Environment.set(platformEnvironmentService.getEnvironment())
  const environmentStore = get(Environment)
  if (route.id === '/') environmentStore.hideBackButton();
  else environmentStore.showBackButton()
  return { environmentStore };
}) satisfies LayoutLoad;
