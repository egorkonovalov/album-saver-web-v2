import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { Layout } from "../component.types";

export function getLayoutType(requestType: RequestType): Layout {
  switch (requestType) {
    case RequestType.Track:
      return "track-list";
    case RequestType.Artist:
      return "artist-grid";
    case RequestType.Album:
    case RequestType.Release:
    default:
      return "album-grid";
  }
}
