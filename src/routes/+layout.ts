import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service";
import type { LayoutLoad } from "./$types";
export const ssr = false;

export const load = (({ route }) => {
  const environment = platformEnvironmentService.getEnvironment()
  if (route.id === '/') environment.hideBackButton();
  else environment.showBackButton()
  return { environment };
}) satisfies LayoutLoad;
