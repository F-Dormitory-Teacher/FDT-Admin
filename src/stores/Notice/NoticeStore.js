import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import NoticeApi from '../../assets/api/NoticeApi';

@autobind
class NoticeStore {
  @observable noticeList = [];

  @action
  handleNoticeInfo = async () => {
    try {
      const response = await NoticeApi.getNotice();

      this.noticeList = response.data.notices;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };
}

export default NoticeStore;
