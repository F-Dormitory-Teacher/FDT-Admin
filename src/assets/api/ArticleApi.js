import axios from 'axios';
import SERVER from '../../config/server';
import Cleint from './Client';
import Client from './Client';

class ArticleApi extends Client {
  constructor() {
    super(Client.createClientWithAccessToken('article'));
  }

  async getArticles() {
    try {
      return await this.getClient().get('/getArticles');
    } catch (error) {
      throw error;
    }
  }
}

export default new ArticleApi();
