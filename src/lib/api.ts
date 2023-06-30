import MusicLibrary from "music-library-service"

export async function getAlbums(query: string) {
  return await MusicLibrary.albums.getAlbums(query)
}

export async function getReleases() {
  return await MusicLibrary.releases.getReleases()
}
