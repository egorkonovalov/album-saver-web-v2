import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service"
import downloaderService from "./downloader.service"

class DownloaderController {
  async download(youTubeMusicPlaylistUrl: string, entityType: 1 | 2) {
    const id = platformEnvironmentService.getInitData().user?.id.toString()
    if (!id) throw "No user id"
    return await downloaderService.download({
      youTubeMusicPlaylistUrl,
      userId: id,
      entityType: entityType.toString()
    })
  }

  async downloadSet(urls: string[]) {
    return await downloaderService.downloadSet({
      urls,
      userId: platformEnvironmentService.getInitData()?.user?.id.toString()
    })
  }
}

export default new DownloaderController()
