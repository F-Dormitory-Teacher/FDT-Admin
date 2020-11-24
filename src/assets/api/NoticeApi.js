import axios from 'axios';
import SERVER from '../../config/server';

class NoticeApi {
  async getNotice(date, type) {
    try {
      let url;
      if (date && type) {
        url = `${SERVER}/notice/getNotices/?date=${date}&type=${type}`;
      } else if (date) {
        url = `${SERVER}/notice/getNotices/?date=${date}`;
      } else if (type) {
        url = `${SERVER}/notice/getNotices/?type=${type}`;
      } else {
        url = `${SERVER}/notice/getNotices`;
      }

      console.log(url);

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async createNotice(date, type, title, content) {
    try {
      const url = `${SERVER}/notice/createNotice`;
      let config = {};

      const body = {
        date,
        type,
        title,
        content,
      };

      if (localStorage.getItem('accessToken')) {
        config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        };
      }

      const { data } = await axios.post(url, body, config);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async showNotice(idx) {
    try {
      const url = `${SERVER}/notice/getNotice/${idx}`;
      console.log(idx);

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async modifyNotice(date, type, title, content) {
    try {
      const url = `${SERVER}/notice/modifyNotice`;
      let config = {};

      const body = {
        date,
        type,
        title,
        content,
      };

      if (localStorage.getItem('accessToken')) {
        config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        };
      }

      const { data } = await axios.put(url, body, config);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new NoticeApi();
