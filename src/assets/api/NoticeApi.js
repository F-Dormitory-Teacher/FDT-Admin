import axios from 'axios';
import SERVER from '../../config/server';

class NoticeApi {
  async getNotice() {
    try {
      const url = `${SERVER}/notice/getNotices`;

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new NoticeApi();
