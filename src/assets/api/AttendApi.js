import axios from 'axios';
import SERVER from '../../config/server';

class AttendApi {
  async AttendInfo(date, type) {
    try {
      let url;
      if (date && type) {
        url = `${SERVER}/attend/getAttends/?date=${date}&type=${type}`;
      } else if (date) {
        url = `${SERVER}/attend/getAttends/?date=${date}`;
      } else if (type) {
        url = `${SERVER}/attend/getAttends/?type=${type}`;
      } else {
        url = `${SERVER}/attend/getAttends`;
      }

      console.log(url);
      let config = {};

      if (localStorage.getItem('accessToken')) {
        config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        };
      }

      const { data } = await axios.get(url, config);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AttendApi();
