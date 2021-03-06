import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import { toast } from 'react-toastify';

import Lost from '../../components/Lost/Lost';
import useStore from '../../lib/hooks/useStore';

const LostContainer = () => {
  const { store } = useStore();
  const {
    losts,
    getLostsStatusCode,
    searchQuery,
    searchArticlesStatusCode,
    getLosts,
    modifyLostStatus,
    modifyLostStatusCode,
    clearLostStore,
  } = store.LostStroe;

  const loadPage = useCallback(() => {
    getLosts();
  }, []);

  const searchQueryDispatch = useCallback(
    query => {
      searchQuery(query);
    },
    [searchQuery],
  );

  const modifyLostStatusDispatch = useCallback(lostProduct => {
    modifyLostStatus(lostProduct);
  });

  useEffect(() => {
    switch (Math.floor(getLostsStatusCode / 100)) {
      case 2:
        toast.success('분실물을 불러오는데 성공하였습니다.');
        break;
      case 4:
        toast.error(`Code: ${getLostsStatusCode} 불러오기 실패.`, {});
    }
  }, [getLostsStatusCode]);

  useEffect(() => {
    switch (Math.floor(searchArticlesStatusCode / 100)) {
      case 2:
        toast.success('검색 성공');
        break;
      case 4:
        toast.error(`Code: ${searchArticlesStatusCode} 검색 실패.`, {});
    }
  }, [searchArticlesStatusCode]);

  useEffect(() => {
    switch (Math.floor(modifyLostStatusCode / 100)) {
      case 2:
        toast.success('분실 상태 수정에 성공하였습니다.');
        clearLostStore();
        loadPage();
        break;
      case 4:
        toast.error(`Code: ${modifyLostStatusCode} 수정 실패.`, {});
    }
  }, [modifyLostStatusCode]);

  return (
    <>
      <Lost
        loadPage={loadPage}
        searchQuery={searchQueryDispatch}
        losts={losts}
        getLosts={getLosts}
        modifyLostStatus={modifyLostStatusDispatch}
        clearLostStore={clearLostStore}
        modifyLostStatusCode={modifyLostStatusCode}
      />
    </>
  );
};

export default observer(LostContainer);
