import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import Suggest from '../../components/Suggest/Suggest';
import { toast } from 'react-toastify';
import useStore from 'lib/hooks/useStore';

const SuggestContainer = ({}) => {
  const { store } = useStore();
  const { articles, getArticlesStatusCode, getArticles, clearArticleStore } = store.ArticleStore;

  const loadPage = useCallback(() => {
    getArticles();
  }, []);

  useEffect(() => {
    switch (Math.floor(getArticlesStatusCode / 100)) {
      case 2:
        toast.success('건의사항을 불러오는데 성공하였습니다.');
        break;
      case 4:
        toast.error(`Code: ${getArticlesStatusCode} 불러오기 실패.`, {});
    }
  }, [getArticlesStatusCode]);

  return (
    <>
      <Suggest articles={articles} loadPage={loadPage} clearArticleStore={clearArticleStore} />
    </>
  );
};

export default observer(SuggestContainer);
