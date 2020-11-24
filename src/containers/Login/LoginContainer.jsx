import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Login from '../../components/Login/Login';
import { toast } from 'react-toastify';
import { useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';

const LoginContainer = ({}) => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const { store } = useStore();

  const { tryLogin, handleIsLogin } = store.AuthStore;

  const history = useHistory();

  const handleTryLogin = useCallback(async () => {
    if (email && pw) {
      await tryLogin(email, pw)
        .then(res => {
          axios.defaults.headers.common['Authorization'] =
            'Bearer ' + localStorage.getItem('accessToken');
          localStorage.setItem('accessToken', res.accessToken);

          handleIsLogin(true);
        })
        .catch(() => {
          toast.warn('아이디 또는 비밀번호를 확인해주세요.');
        });
      history.push('/');
    } else {
      toast.warn('아이디 또는 비밀번호를 확인해주세요.');
    }
  }, [email, pw]);

  return (
    <>
      <Login setEmail={setEmail} setPw={setPw} handleTryLogin={handleTryLogin} />
    </>
  );
};

export default withRouter(observer(LoginContainer));
