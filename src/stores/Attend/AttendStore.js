import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AttendApi from '../../assets/api/AttendApi';
import axios from 'axios';

@autobind
class AttendStore {
  @observable attend = [];

  @action
  handleAttendInfo = async (date, type) => {
    try {
      console.log(date);
      const response = await AttendApi.AttendInfo(date, type);

      this.attend = response.data.attendances;
      console.log(response.data.attendances);

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

export default AttendStore;
