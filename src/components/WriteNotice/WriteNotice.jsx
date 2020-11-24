import React from 'react';
import PropTypes from 'prop-types';
import './WriteNotice.scss';

const WriteNotice = ({ dayType, setDayType, setDate, setTitle, setComment, writeNotice }) => {
  return (
    <>
      <div className='write'>
        <div className='write-container'>
          <input type='text' placeholder='제목' onChange={e => setTitle(e.target.value)} />
          <textarea placeholder='내용' onChange={e => setComment(e.target.value)} />
          <div className='write-container-time'>
            <input type='date' onChange={e => setDate(e.target.value)} />
            <div className='write-container-time-type'>
              <div
                onClick={() => setDayType('MORNING')}
                style={
                  dayType === 'MORNING'
                    ? { color: '#25822e', border: '1px solid #25822e' }
                    : { color: '#c7c7c7' }
                }
              >
                아침
              </div>
              <div
                onClick={() => setDayType('NIGHT')}
                style={
                  dayType === 'NIGHT'
                    ? { color: '#25822e', border: '1px solid #25822e' }
                    : { color: '#c7c7c7' }
                }
              >
                저녁
              </div>
            </div>
          </div>

          <div className='write-container-btnarea'>
            <div className='write-container-btnarea-btn' onClick={() => writeNotice()}>
              완료
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WriteNotice.propTypes = {};

export default WriteNotice;
