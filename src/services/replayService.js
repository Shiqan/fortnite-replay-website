import ReplayProvider from "../providers/replayProvider";

export default class ReplayService {
  constructor() {
    this.provider = new ReplayProvider();
  }

  async playerExists(player) {
    return await this.provider.playerExists(player);
  }

  async getPlayer(filter) {
    return await this.provider.getPlayer(filter);
  }

  upload(formData) {
    return this.provider.upload(formData);
  }
}
