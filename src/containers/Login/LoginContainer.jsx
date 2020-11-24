import React, { useCallback, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Login from '../../components/Login/Login';

const LoginContainer = ({}) => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const { store } = useStore();

  const { tryLogin } = store.AuthStore;

  const handleTryLogin = useCallback(() => {
    tryLogin(email, pw);
  }, [email, pw]);

  return (
    <>
      <Login setEmail={setEmail} setPw={setPw} handleTryLogin={handleTryLogin} />
    </>
  );
};

export default observer(LoginContainer);
