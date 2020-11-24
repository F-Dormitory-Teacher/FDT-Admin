import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import Suggest from '../../components/Suggest/Suggest';
import { toast } from 'react-toastify';
import useStore from 'lib/hooks/useStore';

const SuggestContainer = () => {
  const { store } = useStore();
  const {
    articles,
    getArticlesStatusCode,
    getArticles,
    searchQuery,
    clearArticleStore,
    searchArticlesStatusCode,
  } = store.ArticleStore;

  const loadPage = useCallback(() => {
    getArticles();
  }, []);

  const searchQueryDispatch = useCallback(
    query => {
      searchQuery(query);
    },
    [searchQuery],
  );

  useEffect(() => {
    switch (Math.floor(getArticlesStatusCode / 100)) {
      case 2:
        toast.success('건의사항을 불러오는데 성공하였습니다.');
        break;
      case 4:
        toast.error(`Code: ${getArticlesStatusCode} 불러오기 실패.`, {});
    }
  }, [getArticlesStatusCode]);

  useEffect(() => {
    switch (Math.floor(searchArticlesStatusCode / 100)) {
      case 2:
        toast.success('검색 성공');
        break;
      case 4:
        toast.error(`Code: ${searchArticlesStatusCode} 검색 실패.`, {});
    }
  }, [searchArticlesStatusCode]);

  return (
    <>
      <Suggest
        articles={articles}
        loadPage={loadPage}
        searchQuery={searchQueryDispatch}
        clearArticleStore={clearArticleStore}
      />
    </>
  );
};

export default observer(SuggestContainer);
