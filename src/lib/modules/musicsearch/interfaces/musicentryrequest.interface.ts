export interface MusicEntryRequest {
  userId: number,
  youTubeMusicPlaylistUrl: string;
  entityType: number;
}

export interface MusicSetRequest {
  userId: number,
  urls: string[]
}
