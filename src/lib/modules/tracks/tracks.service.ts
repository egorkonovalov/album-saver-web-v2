import { API_TRACKS } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class TracksService {
  async getTracks(query: string) {
    return await musicGetterService.getMusicQuery(API_TRACKS, { query });
  }
}

export default new TracksService();
