import React from "react";
import { observer } from "mobx-react";
import Header from "../../components/Header/Header"
import Attendance from "../../components/Attendance/Attendance"

const MainContainer = ({}) => {
  return (
    <>
      <Header />
      <Attendance />
    </>
  );
};

export default observer(MainContainer);
