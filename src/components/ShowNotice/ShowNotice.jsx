import React from 'react';
import PropTypes from 'prop-types';
import './ShowNotice.scss';

const ShowNotice = ({ notice }) => {
  return (
    <>
      <div className='shownotice'>
        <div className='shownotice-container'>
          <div className='shownotice-container-area'>
            <div className='shownotice-container-area-title'>{notice.title}</div>
            <div className='shownotice-container-area-date'>{notice.date}</div>
          </div>
          <div className='shownotice-container-content'>{notice.content}</div>
          <div className='shownotice-container-btn'>수정하기</div>
        </div>
      </div>
    </>
  );
};

ShowNotice.propTypes = {};

export default ShowNotice;
