import { API_ALBUMS, API_ALBUM_TRACKS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";
import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface"

type Album = {
  result: Record[]
  albumTitle: string
  albumImage: string
  channelUrl: string
  artistName: string
}

class AlbumsService {
  async getAlbums(query: string) {
    return await musicGetterService.getMusicQuery(API_ALBUMS, { query });
  }
  async getAlbum(albumUrl: string) {
    return await musicGetterService.getData<{ albumUrl: string }, Album>(API_ALBUM_TRACKS, {
      albumUrl,
    });
  }
}

export default new AlbumsService();
