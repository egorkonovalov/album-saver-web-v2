import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface";
import { RequestType } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type {
  MusicEntryRequest,
  MusicSetRequest,
} from "$lib/modules/musicsearch/interfaces/musicentryrequest.interface";
import musicGetterService from "$lib/modules/musicsearch/searchrequest.service";
import platformEnvironmentService from "../platformenvironment/platformenvironment.service";

class SearchRequestController {
  getEntityType(requestType: RequestType): number {
    switch (requestType) {
      case RequestType.Track:
      case RequestType.ArtistTracks:
        return 2;
      case RequestType.Artist:
        return 3;
      case RequestType.Album:
      case RequestType.Release:
      default:
        return 1;
    }
  }

  async getRecords(query: string, requestType: RequestType): Promise<Record[]> {
    let queryObject = {};

    switch (requestType) {
      case RequestType.ArtistTracks: {
        queryObject = { channelUrl: query };
        break;
      }
      case RequestType.AlbumTracks: {
        queryObject = { albumUrl: query };
        break;
      }
      default: {
        queryObject = { query: query };
      }
    }
    return await musicGetterService.getMusicQuery(requestType, queryObject);
  }

  async requestRecord(url: string, requestType: RequestType): Promise<void> {
    const environment = platformEnvironmentService.getEnvironment();
    const data: MusicEntryRequest = {
      userId: environment.userId,
      youTubeMusicPlaylistUrl: url,
      entityType: this.getEntityType(requestType),
    };
    debugger
    return await musicGetterService.requestMusicEntry(data);
  }

  async requestSet(urls: string[]): Promise<void> {
    const environment = platformEnvironmentService.getEnvironment();
    const data: MusicSetRequest = { userId: environment.userId, urls };
    return await musicGetterService.requestMusicSet(data);
  }
}

export default new SearchRequestController();
