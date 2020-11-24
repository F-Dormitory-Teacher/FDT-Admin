import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import ScheduleApi from '../../assets/api/ScheduleApi';

@autobind
class LostStore {
  @observable isRunning = false;

  @observable isRunningStatusCode = 0;

  @observable turnOnStatusCode = 0;

  @observable turnOffStatusCode = 0;

  @action
  async getStatus() {
    try {
      const {
        data: { isRunning },
      } = await ScheduleApi.getStatus();
      this.isRunningStatusCode = 200;
      this.isRunning = isRunning;
    } catch (error) {
      this.isRunningStatusCode = error.response.status;
    }
  }

  @action
  async turnOn() {
    try {
      await ScheduleApi.turnOn();
      this.turnOnStatusCode = 200;
    } catch (error) {
      this.turnOnStatusCode = error.response.status;
    }
  }

  @action
  async turnOff() {
    try {
      await ScheduleApi.turnOff();
      this.turnOffStatusCode = 200;
    } catch (error) {
      this.turnOffStatusCode = error.response.status;
    }
  }

  @action
  clearLostStore() {
    this.isRunning = false;
    this.isRunningStatusCode = 0;
    this.turnOnStatusCode = 0;
    this.turnOffStatusCode = 0;
  }
}

export default LostStore;
