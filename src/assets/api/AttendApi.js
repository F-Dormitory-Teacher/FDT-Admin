import axios from 'axios';
import SERVER from '../../config/server';

class AttendApi {
  async AttendInfo() {
    try {
      const url = `${SERVER}/attend/getAttends`;
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
