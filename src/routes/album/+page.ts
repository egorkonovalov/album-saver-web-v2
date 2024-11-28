import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import albumsController from "$lib/modules/albums/albums.controller";

function getParams(url: URL, key: string) {
  let value = url.searchParams.get(key);
  if (value) return value;
  error(500, `The value for the parameter "${key}" was not provided.`);
}

export const load = (async ({ url }) => {
  const albumUrl = getParams(url, "albumUrl");
  return {
    albumUrl,
    streamed: {
      album: albumsController.getAlbum(albumUrl),
    },
  };
}) satisfies PageLoad;
