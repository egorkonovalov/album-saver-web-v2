import telegramService from "$lib/modules/platformenvironment/telegram.service"
import downloaderService from "./downloader.service"

class DownloaderController {
  async download(youTubeMusicPlaylistUrl: string, entityType: 1 | 2) {
    const id = telegramService.getInitData().user?.id.toString()
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
      userId: telegramService.getInitData()?.user?.id.toString()
    })
  }
}

export default new DownloaderController()
