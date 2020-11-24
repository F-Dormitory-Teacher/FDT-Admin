import Client from './Client';

class LostApi extends Client {
  constructor() {
    super(Client.createClientWithAccessToken('lost-product'));
  }

  async getArticles() {
    try {
      return await this.getClient().get('');
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

export default new LostApi();
