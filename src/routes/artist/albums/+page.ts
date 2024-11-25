import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artistId");
  if (artistId) {
    return {
      streamed: {
        albums: artistsController.getAlbums(artistId),
      },
    };
  }

  error(404, "Not found");
}) satisfies PageLoad;
