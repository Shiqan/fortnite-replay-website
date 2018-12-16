import ReplayProvider from "../providers/replayProvider";

export default class ReplayService {
  constructor() {
    this.provider = new ReplayProvider();
  }

  playerExists(player) {
    return this.provider.playerExists(player);
  }

  async getPlayer(player) {
    return await this.provider.getPlayer(player);
  }

  upload(formData) {
    return this.provider.upload(formData);
  }
}
