import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import useQuery from '../../lib/hooks/useQuery';
import ShowNotice from '../../components/ShowNotice/ShowNotice';
import { useLocation, withRouter } from 'react-router-dom';

const ShowNoticeContainer = ({}) => {
  const { store } = useStore();

  const query = useQuery();
  const { search } = useLocation();

  const { handleShowNotice, notice } = store.NoticeStore;
  console.log(query.get('idx'));

  useEffect(() => {
    handleShowNotice(query.get('idx'));
  }, [search]);

  return (
    <>
      <ShowNotice notice={notice} />
    </>
  );
};

export default withRouter(observer(ShowNoticeContainer));
