import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import MusicLibrary from "music-library-service";

export const load = (async ({ url }) => {
  const artistId = url.searchParams.get("artistId");

  if (artistId) {
    return {
      streamed: {
        tracks: MusicLibrary.artists.getTracks(artistId),
      },
    };
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
