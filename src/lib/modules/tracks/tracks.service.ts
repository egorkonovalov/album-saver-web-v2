import { API_TRACKS } from "$lib/api";
import { get } from "$lib/modules/httprequest/httprequest.service";
import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";

class TracksService {
  async getTracks(query: string) {
    return (await get<{ result: Record[] }>(API_TRACKS, { params: { query } })).result;
  }
}

export default new TracksService();
