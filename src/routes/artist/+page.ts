import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";
import { tokens } from "$lib/stores";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artist_id");

  if (artistId) {
    const tracks = await artistsController.getTracks(artistId, 5);
    tokens.set({});
    const albums = await artistsController.getAlbums(artistId, 5);
    tokens.set({});
    if (tracks && albums) {
      return {
        tracks,
        albums,
      };
    }
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
