import { API_RELEASES } from "$lib/api";
import musicGetterService from "../musicsearch/searchrequest.service";

class ReleasesService {
  async getReleases() {
    return await musicGetterService.getMusicQuery(API_RELEASES, {});
  }
}

export default new ReleasesService();
