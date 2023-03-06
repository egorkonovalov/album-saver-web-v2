import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
import {
  RequestType,
  type MusicQueryRequest,
} from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { MusicEntryRequest } from "$lib/modules/musicsearch/interfaces/musicentryrequest.interface";
import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
import { PlatformEnvironmentService } from "../platformenvironment/platformenvironment.service";

export class SearchRequestController {

  static getEntityType(requestType: RequestType): number {
    switch (requestType) {
      case RequestType.Track: return 2;
      case RequestType.Album:
      case RequestType.Release:
      default: return 1
    }
  }

  static async getRecords(
    query: MusicQueryRequest,
    requestType: RequestType
  ): Promise<Record[]> {
    return await new MusicGetterService().getMusicQuery(query, requestType);
  }

  static async requestRecord(url: string, requestType: RequestType): Promise<void> {
    const environment = PlatformEnvironmentService.getEnvironment();
    const data: MusicEntryRequest = {
      userId: environment.userId,
      youTubeMusicPlaylistUrl: url,
      entityType: this.getEntityType(requestType),
    };
    return await MusicGetterService.requestMusicEntry(data);
  }
}
