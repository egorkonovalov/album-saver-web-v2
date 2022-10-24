export enum RequestType {
  Albums = 'albums',
  Tracks = 'tracks'
}

export interface MusicQueryRequest {
  query: string,
  page: number
  requestType: RequestType | null
}
