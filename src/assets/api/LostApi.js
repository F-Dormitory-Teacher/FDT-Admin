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
}

export default new LostApi();
