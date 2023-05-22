import { API_ALBUMS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class AlbumsService {
  async getAlbums(query: string) {
    return await musicGetterService.getMusicQuery(API_ALBUMS, { query });
  }
}

export default new AlbumsService();
