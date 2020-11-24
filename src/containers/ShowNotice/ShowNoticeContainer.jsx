import React from 'react';
import { observer } from 'mobx-react';
import ShowNotice from '../../components/ShowNotice/ShowNotice';

const ShowNoticeContainer = ({}) => {
  return (
    <>
      <ShowNotice />
    </>
  );
};

export default observer(ShowNoticeContainer);
