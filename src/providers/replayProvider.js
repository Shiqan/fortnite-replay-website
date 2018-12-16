import axios from "axios";

class API {
  constructor(url) {
    this.url = url;
  }

  async playerExists(player) {
    return await axios
      .get(`${this.url}/${player}`)
      .then(response => {
        return response.exists;
      })
      .catch(e => {
        console.log(e);
        return false;
      });
  }

  async getPlayer(username) {
    return await axios
      .get(`${this.url}/replay/${username}/`)
      .then(response => {
        return response.data;
      })
      .catch(e => {
        console.log(e);
      });
  }

  async upload(formData) {
    return await axios
      .post(`${this.url}/replay/upload/`, formData)
      .then(response => {
        return response.data;
      })
      .catch(e => {
        return e;
      });
  }

  ping() {
    return axios.get(`${this.url}/replay/ping/`);
  }
}

export default class ReplayProvider {
  constructor() {
    this.api = new API("http://localhost:5000");
    // this.api = new API("https://fortnite-replay-api.herokuapp.com");
  }

  playerExists(player) {
    return this.api.playerExists(player);
  }

  async getPlayer(player) {
    return this.api.getPlayer(player);

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

  upload(formData) {
    return this.api.upload(formData);
  }
}
