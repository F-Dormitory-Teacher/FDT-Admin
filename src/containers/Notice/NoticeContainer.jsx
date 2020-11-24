import React from "react";
import { observer } from "mobx-react";
import Header from "../../components/Header/Header"
import Notice from "../../components/Notice/Notice"

const NoticeContainer = ({}) => {
  return (
    <>
      <Header/>
      <Notice/>
    </>
  );
};

export default observer(NoticeContainer);
