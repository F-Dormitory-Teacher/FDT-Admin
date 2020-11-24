import AuthStore from './Auth';
import ArticleStore from './ArticleStore';
import AttendStore from './Attend';
import NoticeStore from './Notice';

const stores = {
  AuthStore: new AuthStore(),
  AttendStore: new AttendStore(),
  NoticeStore: new NoticeStore(),
  ArticleStore: new ArticleStore(),
};
export default stores;
