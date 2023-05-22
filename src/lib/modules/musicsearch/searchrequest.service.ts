import createRequest from "../httprequest/httprequest.service";
import { tokens } from "$lib/stores";
import { get } from "svelte/store";
import type { Record } from "./interfaces/record.interface";
import type {
  MusicEntryRequest,
  MusicSetRequest,
} from "./interfaces/musicentryrequest.interface";
import type { MusicQueryRequest } from "./interfaces/musicqueryrequest.interface";

class MusicGetterService {
  private setTokens(response: {
    continuationToken: string;
    token: string;
  }): void {
    const { continuationToken, token } = response;
    return tokens.set({
      continuationToken: continuationToken,
      token: token,
      continuation: true,
    });
  }

  async getMusicQuery(
    endpoint: string,
    requestQuery: MusicQueryRequest
  ): Promise<Record[]> {
    const tokensToSend = get(tokens);
    const response = await createRequest().get(endpoint, {
      params: { ...requestQuery, ...tokensToSend },
    });
    this.setTokens(response.data);
    return response.data.result;
  }

  async requestMusicEntry(requestQuery: MusicEntryRequest): Promise<void> {
    await createRequest().post(
      "/download",
      {},
      {
        params: {
          ...requestQuery,
        },
      }
    );
  }

  async requestMusicSet(requestQuery: MusicSetRequest): Promise<void> {
    await createRequest().post("/download-set", requestQuery);
  }
}

export default new MusicGetterService();
