// import axios from "axios";
export default class ReplayProvider {
  playerExists(player) {
    return player == "Shiqan";
  }
  async getPlayer(player) {
    return {
      name: player,
      start: 0,
      length: 2,
      total: 100,
      totalWins: 1,
      replays: [
        {
          id: "1",
          name: "Unsaved-Replay #1",
          date: "2018-12-01"
        },
        {
          id: "2",
          name: "Unsaved-Replay #2",
          date: "2018-12-01"
        }
      ]
    };
  }

  upload(replays) {
    let promises = replays.map(x => ({
      fileName: x.name
    }));
    return Promise.all(promises);
  }
}
