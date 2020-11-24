import React from 'react';
import PropTypes from 'prop-types';
import './WriteNotice.scss';

const WriteNotice = ({}) => {
  return (
    <>
      <div className='write'>
        <div className='write-container'>
          <input type='text' placeholder='제목' />
          <textarea placeholder='내용' />
          <div className='write-container-btnarea'>
            <div className='write-container-btnarea-btn'>완료</div>
          </div>
        </div>
      </div>
    </>
  );
};

WriteNotice.propTypes = {};

export default WriteNotice;
