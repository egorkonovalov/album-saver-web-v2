import type { Album } from "./album.interface";

export interface MusicEntryRequest {
  userId: number,
  youTubeMusicPlaylistUrl: Album["youTubeMusicPlaylistUrl"];
}
