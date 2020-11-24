import axios from 'axios';
import SERVER from '../../config/server';

class Cleint {
  client;

  constructor(client) {
    this.client = client;
  }

  setClient(client) {
    this.client = client;
  }

  static createClientWithAccessToken(domain) {
    return axios.create({
      baseURL: `${SERVER}/${domain}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
  }

  getClient() {
    return this.client;
  }
}

export default Cleint;
