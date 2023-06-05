import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artist_id");
  const artistName = url.searchParams.get("artist_name");

  if (artistId && artistName) {
    return {
      artistId,
      artistName,
      streamed: {
        tracks: artistsController.getTracks(artistId, 9),
        albums: artistsController.getAlbums(artistId, 6),
      },
    };
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
