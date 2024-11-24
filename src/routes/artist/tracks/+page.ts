import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";
import { tokens } from "$lib/stores";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artistId");

  if (artistId) {
    return {
      streamed: {
        tracks: artistsController.getTracks(artistId),
      },
    };
  }

  error(404, "Not found");
}) satisfies PageLoad;
