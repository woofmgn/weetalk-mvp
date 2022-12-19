import axios from "axios";

class Api {
  constructor(settings) {
    this._url = settings.url;
  }

  async createUser(data) {
    try {
      const res = await axios.post(this._url, {
        name: data.name,
        avatar: data.avatar,
        about: data.about,
        lookingFor: data.lookingFor,
        _id: data._id,
      });
      return res.data;
    } catch {
      return console.log(Error);
    }
  }

  async EditUser(data) {
    try {
      const res = await axios.put(`${this._url}/:id`, {
        name: data.name,
        avatar: data.avatar,
        about: data.about,
        lookingFor: data.lookingFor,
        _id: data._id,
      });
      return res.data;
    } catch {
      return console.log(Error);
    }
  }

  async getMembers() {
    try {
      const res = await axios.get(this._url);
      return res.data;
    } catch {
      return console.log(Error);
    }
  }
}

const settings = {
  url: "https://636b9dd27f47ef51e13586c9.mockapi.io/members",
};

export const api = new Api(settings);
