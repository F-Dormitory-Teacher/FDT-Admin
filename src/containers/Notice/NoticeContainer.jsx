import React from 'react';
import { observer } from 'mobx-react';
import Notice from '../../components/Notice/Notice';

const NoticeContainer = ({}) => {
  return (
    <>
      <Notice />
    </>
  );
};

export default observer(NoticeContainer);
