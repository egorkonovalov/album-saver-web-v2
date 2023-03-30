import { writable } from 'svelte/store';
import type { Record } from './modules/musicsearch/interfaces/record.interface';

export const tokens = writable({});

export const artist = writable<Record>({
  youTubeMusicPlaylistUrl: "",
  title: "",
  author: "",
  imageUrl: "",
  year: "",
  recordType: "",
})

export const album = writable<Record>({
  youTubeMusicPlaylistUrl: "",
  title: "",
  author: "",
  imageUrl: "",
  year: "",
  recordType: "",
})

export const popupContentType = writable<"artist" | "album">("album")

export const popupIsShown = writable<boolean>(false)
