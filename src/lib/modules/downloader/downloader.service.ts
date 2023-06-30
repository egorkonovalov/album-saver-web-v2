import MusicLibrary from "music-library-service"

class DownloaderService {
  async download(query: Record<string, string>) {
    return await MusicLibrary.http.post<void>("/download", { params: { ...query } })
  }
  async downloadSet(body: Record<string, any>) {
    return await MusicLibrary.http.post<void>("/download-set", { body })
  }
}

export default new DownloaderService()
