import React from 'react';
import { observer } from 'mobx-react';
import Header from '../../components/Header/Header';
import WriteNotice from '../../components/WriteNotice/WriteNotice';

const WriteNoticeContainer = ({}) => {
  return (
    <>
      <Header />
      <WriteNotice />
    </>
  );
};

export default observer(WriteNoticeContainer);
