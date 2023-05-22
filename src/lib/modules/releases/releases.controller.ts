import releasesService from "./releases.service";

class ReleasesController {
  async getReleases() {
    return await releasesService.getReleases();
  }
}

export default new ReleasesController();
