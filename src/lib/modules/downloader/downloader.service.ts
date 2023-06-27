import { API_DOWNLOAD, API_DOWNLOADSET } from "$lib/api"
import { post } from "$lib/modules/httprequest/httprequest.service"

class DownloaderService {
  async download(query: Record<string, string>) {
    return await post<void>(API_DOWNLOAD, { params: { ...query } })
  }
  async downloadSet(body: Record<string, any>) {
    return await post<void>(API_DOWNLOADSET, { body })
  }
}

export default new DownloaderService()
