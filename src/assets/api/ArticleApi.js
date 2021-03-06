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

  async searchQuery(query) {
    try {
      return await this.getClient().get(`/search?title=${query}`);
    } catch (error) {
      throw error;
    }
  }
}

export default new ArticleApi();
