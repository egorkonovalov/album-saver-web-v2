import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
import type { RequestType, MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { MusicEntryRequest } from "$lib/modules/musicsearch/interfaces/musicentryrequest.interface";
import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
import type { PlatformEnvironment } from "../platformenvironment/interfaces/PlatformEnvironment.interface";
import { PlatformEnvironmentService } from "../platformenvironment/platformenvironment.service";

export class SearchRequestController {
  static async getRecords(query: MusicQueryRequest, requestType: RequestType): Promise<Record[]> {
    return await new MusicGetterService().getMusicQuery(query, requestType);
  }

  static getUserId(environment: PlatformEnvironment): number {
    return environment.userId
  }

  static async requestRecord(youTubeMusicPlaylistUrl: string, requestType: RequestType): Promise<void> {
    const environment = PlatformEnvironmentService.getEnvironment();
    const userId = this.getUserId(environment);
    const data: MusicEntryRequest = { userId: userId, youTubeMusicPlaylistUrl: youTubeMusicPlaylistUrl }
    return await new MusicGetterService().requestMusicEntry(data, requestType);
  }
}
