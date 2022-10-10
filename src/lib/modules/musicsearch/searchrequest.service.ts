import createRequest from "../httprequest/httprequest.service";

class MusicGetterService {
  public async getMusic() {
    const request = createRequest();
    const response = await request.get("./search");
    return response.data;
  }
}

export default new MusicGetterService();
