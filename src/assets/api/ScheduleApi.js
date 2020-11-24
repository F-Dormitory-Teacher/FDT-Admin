import Client from './Client';

class ScheduleApi extends Client {
  constructor() {
    super(Client.createClientWithAccessToken('schedule'));
  }

  init() {
    this.setClient(Client.createClientWithAccessToken('schedule'));
  }

  async getStatus() {
    try {
      this.init();
      return await this.getClient().get('/status');
    } catch (error) {
      throw error;
    }
  }

  async turnOn() {
    try {
      this.init();
      return await this.getClient().post('');
    } catch (error) {
      throw error;
    }
  }

  async turnOff() {
    try {
      this.init();
      return await this.getClient().delete('');
    } catch (error) {
      throw error;
    }
  }
}

export default new ScheduleApi();
