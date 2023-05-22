import albumsService from "./albums.service";

class AlbumsController {
  async getAlbums(query: string) {
    return await albumsService.getAlbums(query);
  }
}

export default new AlbumsController();
