import createRequest from "../httprequest/httprequest.service";
import { tokens } from "$lib/stores";
import { get } from 'svelte/store';
import { RequestType } from "./interfaces/musicqueryrequest.interface"
import type { Record } from "./interfaces/record.interface";
import type { MusicEntryRequest } from "./interfaces/musicentryrequest.interface";
import type { MusicQueryRequest } from "./interfaces/musicqueryrequest.interface"

export class MusicGetterService {

  private setTokens(response: any) {
    const { result, continuationToken, token } = response;
    return tokens.set({ continuationToken: continuationToken, token: token, continuation: true });
  }

  public async getMusicQuery(requestQuery: MusicQueryRequest, requestType: RequestType): Promise<Record[]> {
    const endpoint = `/${requestType === RequestType.Albums ? 'search' : 'tracks'}`;
    const tokensToSend = get(tokens);
    const response = await createRequest()
      .get(endpoint, { params: { query: requestQuery, ...tokensToSend } });
    this.setTokens(response.data);
    return response.data.result;
  }

  public async requestMusicEntry(requestQuery: MusicEntryRequest, requestType: RequestType) {
    const response = await createRequest()
      .post("/download", {}, {
        params: {
          ...requestQuery,
          entityType: requestType === RequestType.Albums ? 1 : 2
        }
      })
    console.log(response.data)
  }
};
