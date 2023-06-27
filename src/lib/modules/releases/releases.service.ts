import { API_RELEASES } from "$lib/api";
import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
import { get } from "$lib/modules/httprequest/httprequest.service";

class ReleasesService {
  async getReleases() {
    return (await get<{ result: Record[] }>(API_RELEASES)).result;
  }
}

export default new ReleasesService();
