import { API_ALBUMS, API_ALBUM } from "$lib/api";
import { get } from "$lib/modules/httprequest/httprequest.service";
import type { Album, Albums } from "./albums.type";

class AlbumsService {
  async getAlbums(query: string) {
    return (await get<Albums>(API_ALBUMS, { params: { query } })).result;
  }
  async getAlbum(albumUrl: string) {
    return await get<Album>(API_ALBUM, { params: { albumUrl } })
  }
}

export default new AlbumsService();
