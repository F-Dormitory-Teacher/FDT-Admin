import Client from './Client';

class LostApi extends Client {
  constructor() {
    super(Client.createClientWithAccessToken('lost-product'));
  }

  init() {
    this.setClient(Client.createClientWithAccessToken('lost-product'));
  }

  async getArticles() {
    try {
      this.init();
      return await this.getClient().get('');
    } catch (error) {
      throw error;
    }
  }

  async searchQuery(query) {
    try {
      this.init();
      return await this.getClient().get(`/search?title=${query}`);
    } catch (error) {
      throw error;
    }
  }

  async modifyLostStatus(lostProduct) {
    try {
      this.init();
      return await this.getClient().patch('', lostProduct);
    } catch (error) {
      throw error;
    }
  }
}

export default new LostApi();
