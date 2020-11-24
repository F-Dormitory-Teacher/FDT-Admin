import React from "react";
import PropTypes from "prop-types";
import "./Login.scss";

const Login = ({}) => {
  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-container-comments">
            FDT는 <br />
            사람이 하는 <br />
            불편한 점호를 <br />
            무인으로 <br />
            편하게 바꿔주는 <br /> 
            시스템입니다 <br />
          </div>
          <div className="login-container-contents">
            <div className="login-container-contents-input">
            <input placeholder="아이디" />
            <input placeholder="비밀번호" />
            </div>
            <div className="login-container-contents-btn">로그인</div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {

};

export default Login;
