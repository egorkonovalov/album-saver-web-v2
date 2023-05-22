import { API_ARTISTS, API_ARTISTS_ALBUMS, API_ARTISTS_TRACKS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class ArtistsService {
  async getArtists(query: string) {
    return await musicGetterService.getMusicQuery(API_ARTISTS, { query });
  }
  async getTracks(channelUrl: string, takeCount: number) {
    return await musicGetterService.getMusicQuery(API_ARTISTS_TRACKS, {
      channelUrl,
      takeCount,
    });
  }
  async getAlbums(channelUrl: string, takeCount: number) {
    return await musicGetterService.getMusicQuery(API_ARTISTS_ALBUMS, {
      channelUrl,
      takeCount,
    });
  }
}

export default new ArtistsService();
