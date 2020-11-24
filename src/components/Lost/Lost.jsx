import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import moment from 'moment';

import './Lost.scss';
import SERVER from '../../config/server';

const LostStatus = {
  KEEP: '보관',
  LOSTED: '분실',
};

const LostStatusColor = {
  KEEP: 'green',
  LOSTED: 'red',
};

const Lost = ({ losts, getLosts, clearLostStore }) => {
  useEffect(() => {
    getLosts();

    return () => {
      clearLostStore();
    };
  }, []);

  return (
    <>
      <div className='lost'>
        <div className='lost-container'>
          <div className='notice-container-search'>
            <input type='text' placeholder='검색' />
            <BiSearch />
          </div>
        </div>
        <div className='lost-list'>
          {!!losts.length ? (
            losts.map(({ idx, imageUrl, content, location, createdAt, lostStatus }) => (
              <div className='lost-list-content' key={idx}>
                <div className='lost-list-content-image'>
                  {!!imageUrl ? (
                    <img
                      className='lost-list-content-image-fit'
                      src={`${SERVER}/public/${imageUrl}`}
                    />
                  ) : (
                    <h4 className='lost-list-content-image-non_text'>
                      이미지가 존재하지 않는 게시글입니다.
                    </h4>
                  )}
                </div>
                <div className='lost-list-content-title'>{content}</div>
                <div className='lost-list-content-place'>{location}</div>
                <div className='lost-list-content-area'>
                  <div className='lost-list-content-area-date'>
                    {moment(createdAt).format('YYYY-MM-DD')}
                  </div>
                  <div
                    className='lost-list-content-area-state'
                    style={{ color: LostStatusColor[lostStatus] }}
                  >
                    {LostStatus[lostStatus]}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 style={{ marginTop: '1rem' }}>게시물이 존재하지 않습니다.</h1>
          )}
        </div>
      </div>
    </>
  );
};

Lost.propTypes = {
  losts: PropTypes.array,
  getLosts: PropTypes.func,
  clearLostStore: PropTypes.func,
};

export default Lost;
