export enum RequestType {
  Album = "albums",
  Track = "tracks",
  Release = "releases",
  Artist = "artists",
  ArtistTracks = "artist-tracks",
  ArtistAlbums = "artist-albums",
  AlbumTracks = "album-tracks",
}

export type MusicQueryRequest = {
  [key: string]: string | number;
};
