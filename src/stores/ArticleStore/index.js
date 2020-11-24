import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import ArticleApi from '../../assets/api/ArticleApi';

@autobind
class ArticleStore {
  @observable articles = [];
  @observable getArticlesStatusCode = 0;

  @action
  async getArticles() {
    try {
      const {
        status,
        data: {
          data: { articles },
        },
      } = await ArticleApi.getArticles();

      this.getArticlesStatusCode = status;
      this.articles = articles;
    } catch (error) {
      this.getArticlesStatusCode = error.response.status;
    }
  }

  @action
  clearArticleStore() {
    this.articles = [];
    this.getArticlesStatusCode = 0;
  }
}

export default ArticleStore;
