import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import artistsController from "$lib/modules/artists/artists.controller";
import tokensController from "$lib/modules/tokens/tokens.controller";
import { TOKEN_NAMES } from "$lib/constants";

async function loadTracks(artistId: string) {
  let data = await artistsController.getTracks(artistId, 9)
  tokensController.clearTokens(TOKEN_NAMES)
  return data
}

async function loadAlbums(artistId: string) {
  let data = await artistsController.getAlbums(artistId, 6)
  tokensController.clearTokens(TOKEN_NAMES)
  return data
}

export const load = (async ({ url }) => {
  tokensController.clearTokens(TOKEN_NAMES)
  const artistId = url.searchParams.get("artistId");
  const artistName = url.searchParams.get("artistName");
  if (artistId && artistName) {
    return {
      artistId,
      artistName,
      streamed: {
        tracks: loadTracks(artistId),
        albums: loadAlbums(artistId),
        artistImage: artistsController.getImage(artistId)
      },
    };
  }

  error(404, "Not found");
}) satisfies PageLoad;
