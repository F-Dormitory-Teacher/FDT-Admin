import React from 'react';
import { observer } from 'mobx-react';
import Suggest from '../../components/Suggest/Suggest';

const SuggestContainer = ({}) => {
  return (
    <>
      <Suggest />
    </>
  );
};

export default observer(SuggestContainer);
