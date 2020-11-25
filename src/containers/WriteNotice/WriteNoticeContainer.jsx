import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import WriteNotice from '../../components/WriteNotice/WriteNotice';
import { useHistory } from 'react-router-dom';

const WriteNoticeContainer = ({}) => {
  const [date, setDate] = useState('');
  const [dayType, setDayType] = useState('MORNING');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const { store } = useStore();
  const { handleCreateNotice } = store.NoticeStore;
  const history = useHistory();

  const writeNotice = () => {
    handleCreateNotice(date, dayType, title, comment).then(() => {
      history.push('/notice');
    });
  };

  return (
    <>
      <WriteNotice
        dayType={dayType}
        setDayType={setDayType}
        setDate={setDate}
        setTitle={setTitle}
        setComment={setComment}
        writeNotice={writeNotice}
      />
    </>
  );
};

export default observer(WriteNoticeContainer);
