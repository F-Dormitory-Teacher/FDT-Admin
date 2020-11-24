import React from 'react';
import PropTypes from 'prop-types';
import './ModifyNotice.scss';
import { NavLink } from 'react-router-dom';

const ModifyNotice = ({ dayType, setDayType, setDate, setTitle, setComment, modifyNotice }) => {
  return (
    <>
      <div className='Modify'>
        <div className='Modify-container'>
          <input type='text' placeholder='제목' onChange={e => setTitle(e.target.value)} />
          <textarea placeholder='내용' onChange={e => setComment(e.target.value)} />
          <div className='Modify-container-time'>
            <input type='date' onChange={e => setDate(e.target.value)} />
            <div className='Modify-container-time-type'>
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

          <div className='Modify-container-btnarea'>
            <NavLink to='/Notice'>
              <div className='Modify-container-btnarea-btn' onClick={() => modifyNotice()}>
                완료
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

ModifyNotice.propTypes = {};

export default ModifyNotice;
