import React, { useState } from 'react';
import { observer } from 'mobx-react';
import useStore from '../../lib/hooks/useStore';
import ModifyNotice from '../../components/ModifyNotice/ModifyNotice';

const ModifyContainer = ({}) => {
  const [date, setDate] = useState('');
  const [dayType, setDayType] = useState('MORNING');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const { store } = useStore();

  const { handleModifyNotice } = store.NoticeStore;

  const modifyNotice = () => {
    handleModifyNotice(date, dayType, title, comment);
  };

  return (
    <>
      <ModifyNotice
        dayType={dayType}
        setDayType={setDayType}
        setDate={setDate}
        setTitle={setTitle}
        setComment={setComment}
        modifyNotice={modifyNotice}
      />
    </>
  );
};

export default observer(ModifyContainer);
