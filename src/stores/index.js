import AuthStore from './Auth';
import ArticleStore from './ArticleStore';

const stores = {
  AuthStore: new AuthStore(),
  ArticleStore: new ArticleStore(),
};
export default stores;
