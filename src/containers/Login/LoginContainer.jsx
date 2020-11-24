import React from "react";
import { observer } from "mobx-react";
import Header from "../../components/Header/Header"
import Login from "../../components/Login/Login"

const LoginContainer = ({}) => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};

export default observer(LoginContainer);
