import albumsService from "./albums.service";

class AlbumsController {
  async getAlbums(query: string) {
    return await albumsService.getAlbums(query);
  }
  async getAlbum(albumUrl: string) {
    return await albumsService.getAlbum(albumUrl);
  }
}

export default new AlbumsController();
