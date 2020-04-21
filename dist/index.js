"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fetch = require("node-fetch");
const json = (res) => res.json();

class CovidPT {
  constructor() {
    this.proxy = "https://cors-anywhere.herokuapp.com/";
    this.url = "https://covid19-api.vost.pt/Requests";
  }

  async status() {
    return Fetch.default(`${this.proxy + this.url}/get_status`).then(json);
  }

  async last() {
    return Fetch.default(`${this.proxy + this.url}/get_last_update`).then(json);
  }

  async all() {
    return Fetch.default(`${this.proxy + this.url}/get_full_dataset`).then(
      json
    );
  }

  async get(date1, date2) {
    if (date1 && !date2) {
      return Fetch.default(`${this.proxy + this.url}/get_entry/${date1}`).then(
        json
      );
    } else if (date1 && date2) {
      return Fetch.default(
        `${this.proxy + this.url}/get_entry/${date1}_until_${date2}`
      ).then(json);
    }
    return Fetch.default(`${this.proxy + this.url}/get_last_update`).then(json);
  }
}
exports.CovidPT = CovidPT;
