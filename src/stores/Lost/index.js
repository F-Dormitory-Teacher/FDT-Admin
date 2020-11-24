import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import LostApi from '../../assets/api/LostApi';

@autobind
class LostStore {
  @observable losts = [];
  @observable getLostsStatusCode = 0;

  @action
  async getLosts() {
    try {
      const {
        status,
        data: { lostProducts },
      } = await LostApi.getArticles();

      this.getLostsStatusCode = status;
      this.losts = lostProducts;
    } catch (error) {
      console.log(error);
      this.getLostsStatusCode = error.response.status;
    }
  }

  @action
  clearLostStore() {
    this.losts = [];
    this.getLostsStatusCode = 0;
  }
}

export default LostStore;
