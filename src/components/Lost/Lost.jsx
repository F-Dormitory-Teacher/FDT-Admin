import React, { useState, useCallback, useEffect } from 'react';
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

const Lost = ({ losts, searchQuery, getLosts, clearLostStore }) => {
  const [query, setQuery] = useState('');

  const onChangeQuery = useCallback(e => {
    setQuery(e.target.value);
  });

  const onSearchHandler = useCallback(() => {
    searchQuery(query);
  }, [query, searchQuery]);

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onSearchHandler();
    }
  };

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
          <div className='lost-container-search'>
            <input
              type='text'
              placeholder='제목으로 검색'
              value={query}
              onChange={onChangeQuery}
              onKeyDown={onKeyDown}
            />
            <BiSearch onClick={onSearchHandler} />
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
