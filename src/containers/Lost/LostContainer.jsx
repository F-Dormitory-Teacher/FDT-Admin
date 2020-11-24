import React from 'react';
import { observer } from 'mobx-react';
import Lost from '../../components/Lost/Lost';

const LostContainer = ({}) => {
  return (
    <>
      <Lost />
    </>
  );
};

export default observer(LostContainer);
