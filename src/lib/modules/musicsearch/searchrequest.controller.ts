import type { Album } from "$lib/modules/musicsearch/interfaces/album.interface";
import type { MusicQueryRequest } from "$lib/modules/musicsearch/interfaces/musicqueryrequest.interface";
import type { MusicEntryRequest } from "$lib/modules/musicsearch/interfaces/musicentryrequest.interface";
import { MusicGetterService } from "$lib/modules/musicsearch/searchrequest.service";
import { QueryStringParser } from "$lib/utils/QueryStringParser.utility";


export class SearchRequestController {
  static async getAlbums(query: MusicQueryRequest): Promise<Album[]> {
    return await new MusicGetterService().getMusicQuery(query);
  }

  static getUserId(): number {
    const data = QueryStringParser.parseString(Telegram.WebApp.initData);
    const user = QueryStringParser.parseJson(data.user);
    return user.id
  }

  static async requestAlbum(youTubeMusicPlaylistUrl: string): Promise<any> {
    const userId = this.getUserId();
    const data: MusicEntryRequest = { userId: userId, youTubeMusicPlaylistUrl: youTubeMusicPlaylistUrl }
    return await new MusicGetterService().requestMusicEntry(data);
  }
}
