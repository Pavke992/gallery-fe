import { CONFIG } from "../utils/static";
import HttpService from "./http.service";

export default class GalleriesService {
  static async getAll(take = CONFIG.galleriesPerPage, skip = 0, search= "") {
    return await HttpService.request({
      url: "/galleries",
      method: "GET",
      params: {take, skip, search}
    });
  }
}