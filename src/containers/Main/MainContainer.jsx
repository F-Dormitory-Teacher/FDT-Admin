import React from 'react';
import { observer } from 'mobx-react';
import Attendance from '../../components/Attendance/Attendance';

const MainContainer = ({}) => {
  return (
    <>
      <Attendance />
    </>
  );
};

export default observer(MainContainer);
