import axios from 'axios';
import SERVER from '../../config/server';

class AuthApi {
  async Login(email, pw) {
    try {
      const url = `${SERVER}/auth`;

      const body = {
        email,
        pw,
      };

      const { data } = await axios.post(url, body);
      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new AuthApi();
