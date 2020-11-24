import React from 'react';
import { observer } from 'mobx-react';
import WriteNotice from '../../components/WriteNotice/WriteNotice';

const WriteNoticeContainer = ({}) => {
  return (
    <>
      <WriteNotice />
    </>
  );
};

export default observer(WriteNoticeContainer);
