import createRequest from "../httprequest/httprequest.service";
import type { Album } from "./interfaces/album.interface";
import type { MusicSearchRequest } from "./interfaces/musicsearchrequest.interface"

export class MusicGetterService {
  public async getMusic(query: MusicSearchRequest): Promise<Album[]> {
    const request = createRequest();
    const response = await request.get(`/search?query=${query.query}&page=${query.page}`);
    return response.data;
  }
};
