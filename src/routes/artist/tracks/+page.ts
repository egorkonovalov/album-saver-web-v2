import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";
import { tokens } from "$lib/stores";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artist_id");

  if (artistId) {
    const tracks = await artistsController.getTracks(artistId);
    tokens.set({});
    if (tracks) {
      return {
        tracks,
      };
    }
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
