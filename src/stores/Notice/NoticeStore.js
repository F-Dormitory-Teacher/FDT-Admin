import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import NoticeApi from '../../assets/api/NoticeApi';

@autobind
class NoticeStore {
  @observable noticeList = [];
  @observable notice = [];

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

  @action
  handleCreateNotice = async (date, type, title, contnet) => {
    try {
      const response = await NoticeApi.createNotice(date, type, title, contnet);

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };

  @action
  handleShowNotice = async idx => {
    try {
      const response = await NoticeApi.showNotice(idx);

      this.notice = response.data.notice;

      return new Promise((resolve, reject) => {
        resolve(response);
      });
    } catch (error) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  };

  @action
  handleModifyNotice = async (date, type, title, contnet) => {
    try {
      const response = await NoticeApi.modifyNotice(date, type, title, contnet);

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
