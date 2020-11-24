import React from 'react';
import PropTypes from 'prop-types';
import './Notice.scss';
import { BiSearch } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Notice = ({}) => {
  return (
    <>
      <div className='notice'>
        <div className='notice-container'>
          <div className='notice-container-search'>
            <input type='text' placeholder='검색' />
            <BiSearch />
          </div>
          <NavLink to='/WriteNotice'>
            <div className='notice-container-btn'>공지하기</div>
          </NavLink>
        </div>
        <div className='notice-list'>
          <NavLink to='/ShowNotice'>
            <div className='notice-list-content'>
              <div className='attendance-list-content'>
                <div className='attendance-list-content-name'>공지사항</div>
                <div className='attendance-list-content-date'>2020-11-24</div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

Notice.propTypes = {};

export default Notice;
