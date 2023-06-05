import { API_ARTISTS, API_ARTISTS_ALBUMS, API_ARTISTS_TRACKS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class ArtistsService {
  async getArtists(query: string) {
    return await musicGetterService.getMusicQuery(API_ARTISTS, { query });
  }
  async getTracks(channelUrl: string, takeCount?: number) {
    let query: { [key: string]: string | number } = { channelUrl };
    if (takeCount) query.takeCount = takeCount;
    return await musicGetterService.getMusicQuery(API_ARTISTS_TRACKS, query);
  }
  async getAlbums(channelUrl: string, takeCount?: number) {
    let query: { [key: string]: string | number } = { channelUrl };
    if (takeCount) query.takeCount = takeCount;
    return await musicGetterService.getMusicQuery(API_ARTISTS_ALBUMS, query);
  }
}

export default new ArtistsService();
