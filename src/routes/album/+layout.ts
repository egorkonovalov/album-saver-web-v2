import type { LayoutLoad } from "./$types";

export const load = (async ({ parent }) => {
  const { environment } = await parent();
  return { environment };
}) satisfies LayoutLoad;
