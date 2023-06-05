import albumsService from "./albums.service";

class AlbumsController {
  async getAlbums(query: string) {
    return await albumsService.getAlbums(query);
  }
  async getAlbumTracks(albumUrl: string) {
    return await albumsService.getAlbumTracks(albumUrl);
  }
}

export default new AlbumsController();
