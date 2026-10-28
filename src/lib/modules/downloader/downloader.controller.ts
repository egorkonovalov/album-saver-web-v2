import platformEnvironmentService from "$lib/modules/platformenvironment/platformenvironment.service"
import downloaderService from "./downloader.service"

class DownloaderController {
  private activeDownloads = new Map<string, Promise<void>>();

  async download(youTubeMusicPlaylistUrl: string, entityType: 1 | 2): Promise<void> {
    const userId = platformEnvironmentService.getEnvironment().userId.toString();
    const requestKey = `${userId}:${entityType}:${youTubeMusicPlaylistUrl}`;
    const activeDownload = this.activeDownloads.get(requestKey);

    if (activeDownload) return await activeDownload;

    const request = downloaderService.download({
      youTubeMusicPlaylistUrl,
      userId,
      entityType: entityType.toString()
    });

    this.activeDownloads.set(requestKey, request);

    try {
      await request;
    } finally {
      if (this.activeDownloads.get(requestKey) === request) {
        this.activeDownloads.delete(requestKey);
      }
    }
  }

  async downloadSet(urls: string[]) {
    return await downloaderService.downloadSet({
      urls,
      userId: platformEnvironmentService.getEnvironment().userId.toString()
    })
  }
}

export default new DownloaderController()
