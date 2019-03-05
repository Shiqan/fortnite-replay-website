import axios from "axios";

class API {
  constructor(url) {
    this.url = url;
  }

  async playerExists(player) {
    return await axios
      .get(`${this.url}/player/${player}`)
      .then(response => {
        return response.data.exists;
      })
      .catch(e => {
        console.error(e);
        return false;
      });
  }

  async getPlayer(filter) {
    console.log(filter);
    return await axios
      .post(`${this.url}/replay/`, filter)
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
    let endpoint = process.env.VUE_APP_API_URL || "http://localhost:5000";
    this.api = new API(endpoint);
  }

  playerExists(player) {
    return this.api.playerExists(player);
  }

  async getPlayer(filter) {
    return this.api.getPlayer(filter);
  }

  upload(formData) {
    return this.api.upload(formData);
  }
}
