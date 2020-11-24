import AuthStore from './Auth';
import ArticleStore from './ArticleStore';
import AttendStore from './Attend';
import NoticeStore from './Notice';
import LostStroe from './Lost';

const stores = {
  AuthStore: new AuthStore(),
  AttendStore: new AttendStore(),
  NoticeStore: new NoticeStore(),
  ArticleStore: new ArticleStore(),
  LostStroe: new LostStroe(),
};
export default stores;
