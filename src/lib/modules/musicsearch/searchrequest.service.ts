import createRequest from "../httprequest/httprequest.service";
import { RequestType } from "./interfaces/musicqueryrequest.interface"
import type { Record } from "./interfaces/record.interface";
import type { MusicEntryRequest } from "./interfaces/musicentryrequest.interface";
import type { MusicQueryRequest } from "./interfaces/musicqueryrequest.interface"

export class MusicGetterService {
  public async getMusicQuery(data: MusicQueryRequest): Promise<Record[]> {
    const request = createRequest();
    const response = await request.get(`/${data.requestType === RequestType.Albums ? 'search' : 'tracks'}?query=${data.query}&page=${data.page}`);
    return response.data;
  }

  public async requestMusicEntry(data: MusicEntryRequest) {
    const request = createRequest();
    const response = await request.post(`/download?userId=${data.userId}&youTubeMusicPlaylistUrl=${data.youTubeMusicPlaylistUrl}`)
    console.log(response.data)
  }
};
