import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
import {
  RequestType
} from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { MusicEntryRequest } from "$lib/modules/musicsearch/interfaces/musicentryrequest.interface";
import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
import { PlatformEnvironmentService } from "../platformenvironment/platformenvironment.service";
import { TelegramEnvironment } from "../platformenvironment/classes/TelegramEnvironment.class";

export class SearchRequestController {

  static getEntityType(requestType: RequestType): number {
    switch (requestType) {
      case RequestType.Track: return 2;
      case RequestType.Artist: return 3;
      case RequestType.Album:
      case RequestType.Release:
      default: return 1
    }
  }

  static async getRecords(
    query: string,
    requestType: RequestType
  ): Promise<Record[]> {
    let queryObject = {}
    if (requestType === RequestType.ArtistTracks) {
      queryObject = {
        channelUrl: query
      }
    }
    else {
      queryObject = {
        query: query
      }
    }
    return await new MusicGetterService().getMusicQuery(queryObject, requestType);
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
