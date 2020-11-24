import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Attendance from '../../components/Attendance/Attendance';
import { useHistory, withRouter } from 'react-router-dom';

const MainContainer = ({}) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const { store } = useStore();
  const { handleAttendInfo, attend } = store.AttendStore;

  const history = useHistory();

  const listLoading = () => {
    handleAttendInfo(date, type).catch(() => {
      history.push('/login');
    });
  };

  return (
    <>
      <Attendance attend={attend} setDate={setDate} setType={setType} listLoading={listLoading} />
    </>
  );
};

export default withRouter(observer(MainContainer));
