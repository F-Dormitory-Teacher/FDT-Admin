import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import Attendance from '../../components/Attendance/Attendance';
import { useHistory, withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

const MainContainer = ({}) => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');

  const { store } = useStore();
  const { handleAttendInfo, attend } = store.AttendStore;

  const {
    isRunning,
    getStatus,
    turnOn,
    turnOff,
    clearLostStore,
    isRunningStatusCode,
    turnOnStatusCode,
    turnOffStatusCode,
  } = store.ScheduleStore;

  const history = useHistory();

  const listLoading = () => {
    handleAttendInfo(date, type).catch(() => {
      history.push('/login');
    });
  };

  const getStatusDispatch = useCallback(() => {
    getStatus();
  }, [getStatus]);

  const turnOnDispatch = useCallback(() => {
    turnOn();
  }, [turnOn]);

  const turnOffDispatch = useCallback(() => {
    turnOff();
  }, [turnOff]);

  const clearLostStoreDispatch = useCallback(() => {
    clearLostStore();
  }, [clearLostStore]);

  useEffect(() => {
    switch (Math.floor(isRunningStatusCode / 100)) {
      case 2:
        toast.success('스케쥴러 상태를 불러오는데 성공하였습니다.');
        break;
      case 4:
        toast.error(`Code: ${isRunningStatusCode} 불러오기 실패.`, {});
    }
  }, [isRunningStatusCode]);

  useEffect(() => {
    switch (Math.floor(turnOnStatusCode / 100)) {
      case 2:
        toast.success('스케쥴러 실행에 성공하였습니다.');
        clearLostStoreDispatch();
        getStatusDispatch();
        break;
      case 4:
        toast.error(`Code: ${turnOnStatusCode} 불러오기 실패.`, {});
    }
  }, [turnOnStatusCode]);

  useEffect(() => {
    switch (Math.floor(turnOffStatusCode / 100)) {
      case 2:
        toast.success('스케줄러 정지에 성공하였습니다.');
        clearLostStoreDispatch();
        getStatusDispatch();
        break;
      case 4:
        toast.error(`Code: ${turnOffStatusCode} 불러오기 실패.`, {});
    }
  }, [turnOffStatusCode]);

  return (
    <>
      <Attendance
        attend={attend}
        setDate={setDate}
        setType={setType}
        listLoading={listLoading}
        isRunning={isRunning}
        getStatus={getStatusDispatch}
        turnOn={turnOnDispatch}
        turnOff={turnOffDispatch}
        clearLostStore={clearLostStoreDispatch}
      />
    </>
  );
};

export default withRouter(observer(MainContainer));
