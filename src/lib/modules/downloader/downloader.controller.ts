import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service"
import downloaderService from "./downloader.service"

class DownloaderController {
  async download(youTubeMusicPlaylistUrl: string, entityType: 1 | 2) {
    return await downloaderService.download({
      youTubeMusicPlaylistUrl,
      userId: platformEnvironmentService.getEnvironment().userId.toString(),
      entityType: entityType.toString()
    })
  }

  async downloadSet(urls: string[]) {
    return await downloaderService.downloadSet({
      urls,
      userId: platformEnvironmentService.getEnvironment().userId.toString()
    })
  }
}

export default new DownloaderController()
