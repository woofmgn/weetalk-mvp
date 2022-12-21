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
        likes: [],
      });
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async EditUser(data, id) {
    try {
      const res = await axios.put(`${this._url}/${id}`, {
        name: data.name,
        avatar: data.avatar,
        about: data.about,
        lookingFor: data.lookingFor,
        _id: data._id,
      });
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async getMembers() {
    try {
      const res = await axios.get(this._url);
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async _addLike(idCard, userId) {
    try {
      const prevData = await axios.get(`${this._url}/${idCard}`);
      const arr = prevData.data.likes;
      const res = await axios.put(`${this._url}/${idCard}`, {
        ...prevData.data,
        likes: [...arr, userId],
      });
      console.log("добавилось");
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async _removeLike(idCard, userId) {
    try {
      const prevData = await axios.get(`${this._url}/${idCard}`);
      const arr = prevData.data.likes;
      const newArr = arr.filter((item) => item !== userId);
      const res = await axios.put(`${this._url}/${idCard}`, {
        ...prevData.data,
        likes: newArr,
      });
      console.log("удалилось");
      return res.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  toggleLikeCard(status, idCard, userId) {
    return status
      ? this._removeLike(idCard, userId)
      : this._addLike(idCard, userId);
  }
}

const settings = {
  url: "https://636b9dd27f47ef51e13586c9.mockapi.io/members",
};

export const api = new Api(settings);
