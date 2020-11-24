import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Attendance from '../../components/Attendance/Attendance';
import { useHistory, withRouter } from 'react-router-dom';

const MainContainer = ({}) => {
  const { store } = useStore();
  const { handleAttendInfo, attend } = store.AttendStore;

  const history = useHistory();

  useEffect(() => {
    handleAttendInfo().catch(() => {
      history.push('/login');
    });
  }, []);

  return (
    <>
      <Attendance attend={attend} />
    </>
  );
};

export default withRouter(observer(MainContainer));
