import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import LostApi from '../../assets/api/LostApi';

@autobind
class LostStore {
  @observable losts = [];
  @observable getLostsStatusCode = 0;

  @observable searchArticlesStatusCode = 0;

  @observable modifyLostStatusCode = 0;

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
  async searchQuery(query) {
    try {
      const {
        status,
        data: { lostProducts },
      } = await LostApi.searchQuery(query);

      this.searchQueryStatusCode = status;
      this.losts = lostProducts;
    } catch (error) {
      this.searchQueryStatusCode = error.response.status;
    }
  }

  @action
  async modifyLostStatus(lostProduct) {
    try {
      const { status } = await LostApi.modifyLostStatus(lostProduct);

      this.modifyLostStatusCode = status;
    } catch (error) {
      this.modifyLostStatusCode = error.response.status;
    }
  }

  @action
  clearLostStore() {
    this.losts = [];
    this.getLostsStatusCode = 0;
    this.searchQueryStatusCode = 0;
    this.modifyLostStatusCode = 0;
  }
}

export default LostStore;
