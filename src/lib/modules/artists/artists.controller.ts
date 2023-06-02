import artistsService from "./artists.service";

class ArtistsController {
  async getArtists(query: string) {
    return await artistsService.getArtists(query);
  }
  async getTracks(channelUrl: string, takeCount?: number) {
    return await artistsService.getTracks(channelUrl, takeCount);
  }
  async getAlbums(channelUrl: string, takeCount: number) {
    return await artistsService.getAlbums(channelUrl, takeCount);
  }
}

export default new ArtistsController();
