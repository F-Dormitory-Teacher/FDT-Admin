import React from 'react';
import PropTypes from 'prop-types';
import './Notice.scss';
import { NavLink } from 'react-router-dom';

const Notice = ({ isList, noticeList, setDate, setType }) => {
  console.log(noticeList);
  return (
    <>
      <div className='notice'>
        <div className='notice-container'>
          <div className='notice-container-search'>
            <div className='notice-container-search'>
              <input type='date' onChange={e => setDate(e.target.value)} />
              <select type='text' placeholder='학번' onChange={e => setType(e.target.value)}>
                <option value=''>전체</option>
                <option value='MORNING'>아침점호</option>
                <option value='NIGHT'>저녁점호</option>
              </select>
            </div>
          </div>
          <NavLink to='/WriteNotice'>
            <div className='notice-container-btn'>공지하기</div>
          </NavLink>
        </div>
        {isList ? (
          <div className='notice-list'>
            {noticeList.map(item => {
              return (
                <NavLink to={`/ShowNotice/?idx=${item.idx}`} key={item.idx}>
                  <div className='notice-list-content'>
                    <div className='notice-list-content'>
                      <div className='notice-list-content-name'>{item.title}</div>
                      <div className='notice-list-content-day'>
                        {item.type === 'MORNING' ? '아침점호' : '저녁점호'}
                      </div>
                      <div className='notice-list-content-date'>{item.date}</div>
                    </div>
                  </div>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <div className='notice-none'>공지가 없어요!</div>
        )}
      </div>
    </>
  );
};

Notice.propTypes = {};

export default Notice;
