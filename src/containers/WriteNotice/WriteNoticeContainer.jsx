import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import WriteNotice from '../../components/WriteNotice/WriteNotice';

const WriteNoticeContainer = ({}) => {
  const [date, setDate] = useState('');
  const [dayType, setDayType] = useState('MORNING');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const { store } = useStore();
  const { handleCreateNotice } = store.NoticeStore;

  const writeNotice = () => {
    handleCreateNotice(date, dayType, title, comment);
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
