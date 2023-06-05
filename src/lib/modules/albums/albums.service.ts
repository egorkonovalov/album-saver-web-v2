import { API_ALBUMS, API_ALBUM_TRACKS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class AlbumsService {
  async getAlbums(query: string) {
    return await musicGetterService.getMusicQuery(API_ALBUMS, { query });
  }
  async getAlbumTracks(albumUrl: string) {
    return await musicGetterService.getMusicQuery(API_ALBUM_TRACKS, {
      albumUrl,
    });
  }
}

export default new AlbumsService();
