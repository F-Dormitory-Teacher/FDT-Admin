import React from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Header from '../../components/Header/Header';

const HeaderContainer = ({}) => {
  const { store } = useStore();
  const { isLogin, tryLogOut } = store.AuthStore;

  const logOut = () => {
    localStorage.clear();
    tryLogOut();
    console.log(isLogin);
  };

  return (
    <>
      <Header isLogin={isLogin} logOut={logOut} />
    </>
  );
};

export default observer(HeaderContainer);
