import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import Notice from '../../components/Notice/Notice';
import useStore from '../../lib/hooks/useStore';
import { useHistory, withRouter } from 'react-router-dom';

const NoticeContainer = ({}) => {
  const { store } = useStore();
  const { handleNoticeInfo, noticeList } = store.NoticeStore;
  const [isList, setIsList] = useState(true);

  const history = useHistory();

  useEffect(() => {
    handleNoticeInfo().catch(error => {
      if (error.message.indexOf('404') !== -1) {
        setIsList(false);
      } else {
        history.push('/login');
      }
    });
  }, []);
  return (
    <>
      <Notice isList={isList} noticeList={noticeList} />
    </>
  );
};

export default withRouter(observer(NoticeContainer));
