import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import albumsController from "$lib/modules/albums/albums.controller";
import { album as AlbumStore } from "$lib/stores";

import { get } from "svelte/store";

function getParams(url: URL, key: string) {
  let value = url.searchParams.get(key);
  if (value) return value;
  throw error(500, `The value for the parameter "${key}" was not provided.`);
}

export const load = (async ({ url, parent }) => {
  const albumUrl = getParams(url, "albumUrl");
  const { environmentStore } = await parent()
  return {
    environmentStore,
    albumStore: get(AlbumStore),
    streamed: {
      album: albumsController.getAlbum(albumUrl),
    },
  };
}) satisfies PageLoad;
