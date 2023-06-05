import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service";
import type { LayoutLoad } from "./$types";
export const prerender = false;

export const load = (() => {
  return { environment: platformEnvironmentService.getEnvironment() };
}) satisfies LayoutLoad;
