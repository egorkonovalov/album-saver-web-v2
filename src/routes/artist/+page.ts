import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import MusicLibrary from "music-library-service";
import { TOKEN_NAMES } from "$lib/constants";

async function loadTracks(artistId: string) {
  let data = await MusicLibrary.artists.getTracks(artistId, 9)
  MusicLibrary.tokens.clearTokens(TOKEN_NAMES)
  return data
}

async function loadAlbums(artistId: string) {
  let data = await MusicLibrary.artists.getAlbums(artistId, 6)
  MusicLibrary.tokens.clearTokens(TOKEN_NAMES)
  return data
}

export const load = (async ({ url }) => {
  MusicLibrary.tokens.clearTokens(TOKEN_NAMES)
  const artistId = url.searchParams.get("artistId");
  const artistName = url.searchParams.get("artistName");
  if (artistId && artistName) {
    return {
      artistId,
      artistName,
      streamed: {
        tracks: loadTracks(artistId),
        albums: loadAlbums(artistId),
        artistImage: MusicLibrary.artists.getImage(artistId)
      },
    };
  }

  throw error(404, "Not found");
}) satisfies PageLoad;
