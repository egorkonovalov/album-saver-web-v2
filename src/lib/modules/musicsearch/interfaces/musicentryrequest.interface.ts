import type { Record } from "./record.interface";

export interface MusicEntryRequest {
  userId: number,
  youTubeMusicPlaylistUrl: Record["youTubeMusicPlaylistUrl"];
}
