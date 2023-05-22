import tracksService from "./tracks.service";

class TracksController {
  async getTracks(query: string) {
    return await tracksService.getTracks(query);
  }
}

export default new TracksController();
