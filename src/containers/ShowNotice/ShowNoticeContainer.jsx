import React from 'react';
import { observer } from 'mobx-react';
import Header from '../../components/Header/Header';
import ShowNotice from '../../components/ShowNotice/ShowNotice';

const ShowNoticeContainer = ({}) => {
  return (
    <>
      <Header />
      <ShowNotice />
    </>
  );
};

export default observer(ShowNoticeContainer);
