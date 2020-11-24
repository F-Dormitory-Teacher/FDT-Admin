import React from 'react';
import PropTypes from 'prop-types';
import './ShowNotice.scss';

const ShowNotice = ({}) => {
  return (
    <>
      <div className='shownotice'>
        <div className='shownotice-container'>
          <div className='shownotice-container-area'>
            <div className='shownotice-container-area-title'>타이틀</div>
            <div className='shownotice-container-area-date'>2020-12-12</div>
          </div>
          <div className='shownotice-container-content'></div>
          <div className='shownotice-container-btn'>수정하기</div>
        </div>
      </div>
    </>
  );
};

ShowNotice.propTypes = {};

export default ShowNotice;
