import createRequest from "../httprequest/httprequest.service";
import type { Album } from "./interfaces/album.interface";
import type { MusicEntryRequest } from "./interfaces/musicentryrequest.interface";
import type { MusicQueryRequest } from "./interfaces/musicqueryrequest.interface"

export class MusicGetterService {
  public async getMusicQuery(data: MusicQueryRequest): Promise<Album[]> {
    const request = createRequest();
    const response = await request.get(`/search?query=${data.query}&page=${data.page}`);
    return response.data;
  }

  public async requestMusicEntry(data: MusicEntryRequest) {
    const request = createRequest();
    const response = await request.post(`/download?userId=${data.userId}&youTubeMusicPlaylistUrl=${data.youTubeMusicPlaylistUrl}`)
    console.log(response.data)
  }
};
