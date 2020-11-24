import React from 'react';
import './Login.scss';

const Login = ({ setEmail, setPw, handleTryLogin }) => {
  return (
    <>
      <div className='login'>
        <div className='login-container'>
          <div className='login-container-comments'>
            FDT는 <br />
            사람이 하는 <br />
            불편한 점호를 <br />
            무인으로 <br />
            편하게 바꿔주는 <br />
            시스템입니다 <br />
          </div>
          <div className='login-container-contents'>
            <div className='login-container-contents-input'>
              <input placeholder='아이디' onChange={e => setEmail(e.target.value)} />
              <input placeholder='비밀번호' onChange={e => setPw(e.target.value)} type='password' />
            </div>
            <div className='login-container-contents-btn' onClick={() => handleTryLogin()}>
              로그인
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
