import React from 'react';
import PropTypes from 'prop-types';
import './Attendance.scss';

const Attendance = ({ attend }) => {
  console.log(attend);
  return (
    <>
      <div className='attendance'>
        <div className='attendance-container'>
          <div className='attendance-container-search'>
            <input type='date' />
            <input type='text' placeholder='학번' />
          </div>
          <div className='attendance-container-btn'>리스트생성</div>
        </div>
        <div className='attendance-list'>
          {attend.map(item => {
            return (
              <div className='attendance-list-content'>
                <div className='attendance-list-content-area'>
                  <div className='attendance-list-content-area-name'>{item.userName}</div>
                  <div className='attendance-list-content-area-date'>{item.date}</div>
                </div>
                {item.type === 'MORNING' ? (
                  <div className='attendance-list-content-value'>
                    아침점호:
                    {item.status === 'ATTEND' ? (
                      <span style={{ color: '#25822E' }}>출석</span>
                    ) : item.status === 'TARDY' ? (
                      <span style={{ color: '#C0C28A' }}>지각</span>
                    ) : (
                      <span style={{ color: '#C41E1E' }}>결석</span>
                    )}
                  </div>
                ) : (
                  <div className='attendance-list-content-value'>
                    저녁점호:
                    {item.status === 'ATTEND' ? (
                      <span style={{ color: '#25822E' }}>출석</span>
                    ) : item.status === 'TARDY' ? (
                      <span style={{ color: '#C0C28A' }}>지각</span>
                    ) : (
                      <span style={{ color: '#C41E1E' }}>결석</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Attendance.propTypes = {};

export default Attendance;
