import { API_ARTISTS, API_ARTISTS_ALBUMS, API_ARTISTS_TRACKS, API_ARTISTS_IMAGE } from "$lib/api";
import { get } from "../httprequest/httprequest.service";
import type { ArtistRecords } from "./artists.type";

class ArtistsService {
  async getArtists(query: string) {
    return (await get<ArtistRecords>(API_ARTISTS, { params: { query } })).result;
  }
  async getTracks(channelUrl: string, takeCount?: number) {
    let query: { [key: string]: string } = { channelUrl };
    if (takeCount) query.takeCount = takeCount.toString();
    return await get<ArtistRecords>(API_ARTISTS_TRACKS, query);
  }
  async getAlbums(channelUrl: string, takeCount?: number) {
    let query: { [key: string]: string } = { channelUrl };
    if (takeCount) query.takeCount = takeCount.toString();
    return await get<ArtistRecords>(API_ARTISTS_ALBUMS, { params: { ...query, continuation: 'true' } });
  }
  async getImage(channelUrl: string) {
    return await get<string>(API_ARTISTS_IMAGE, { params: { channelUrl } })
  }
}

export default new ArtistsService();
