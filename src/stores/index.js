import AuthStore from './Auth';
import AttendStore from './Attend';
import NoticeStore from './Notice';

const stores = {
  AuthStore: new AuthStore(),
  AttendStore: new AttendStore(),
  NoticeStore: new NoticeStore(),
};
export default stores;
