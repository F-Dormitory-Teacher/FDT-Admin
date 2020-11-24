import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Header from '../../components/Header/Header';
import { toast } from 'react-toastify';
import { useHistory, withRouter } from 'react-router-dom';

const HeaderContainer = ({}) => {
  const { store } = useStore();
  const { isLogin, tryLogOut, getInfo, handleIsLogin } = store.AuthStore;

  const history = useHistory();

  const logOut = () => {
    localStorage.clear();
    tryLogOut();
    history.push('/login');
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken') && localStorage.getItem('accessToken').length > 0) {
      getInfo().catch(err => {
        toast.warn('관리자만 접근 가능합니다.');
        handleIsLogin(false);
        history.push('/login');
        localStorage.removeItem('accessToken');
      });
    }
  }, [isLogin]);

  return (
    <>
      <Header isLogin={isLogin} logOut={logOut} />
    </>
  );
};

export default withRouter(observer(HeaderContainer));
