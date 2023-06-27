import type { Record } from "$lib/modules/musicsearch/interfaces/record.interface"

export type Album = {
  result: Record[]
  albumTitle: string
  albumImage: string
  channelUrl: string
  artistName: string
}

export type Albums = {
  result: Record[]
}
