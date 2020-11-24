import HeaderContainer from '../../../containers/Header/HeaderContainer';
import React from 'react';

const MainTemplate = ({ children }) => {
  return (
    <>
      <HeaderContainer />
      {children}
    </>
  );
};

export default MainTemplate;
