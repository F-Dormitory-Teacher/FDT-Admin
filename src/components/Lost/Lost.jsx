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

const Lost = ({ getLosts, clearLostStore }) => {
  useEffect(() => {
    getLosts();

    return () => {
      clearLostStore();
    };
  }, []);
  const losts = [
    {
      content: 'fffff',
      createdAt: '2020-11-23T20:26:07.684Z',
      idx: 1,
      imageUrl: 'files-92631105-d0d3-4824-bfd5-0b091d5be4f0-48552260.jpeg',
      location: 'ffff',
      lostStatus: 'KEEP',
      title: 'ffff',
      userIdx: 2,
      userName: 'admin',
      userStudentId: '1234',
    },
    {
      content: 'fffff',
      createdAt: '2020-11-23T20:26:07.684Z',
      idx: 2,
      imageUrl: 'files-92631105-d0d3-4824-bfd5-0b091d5be4f0-48552260.jpeg',
      location: 'ffff',
      lostStatus: 'KEEP',
      title: 'ffff',
      userIdx: 2,
      userName: 'admin',
      userStudentId: '1234',
    },
    {
      content: 'fffff',
      createdAt: '2020-11-23T20:26:07.684Z',
      idx: 3,
      imageUrl: 'files-92631105-d0d3-4824-bfd5-0b091d5be4f0-48552260.jpeg',
      location: 'ffff',
      lostStatus: 'KEEP',
      title: 'ffff',
      userIdx: 2,
      userName: 'admin',
      userStudentId: '1234',
    },
    {
      content: 'fffff',
      createdAt: '2020-11-23T20:26:07.684Z',
      idx: 4,
      imageUrl: 'files-92631105-d0d3-4824-bfd5-0b091d5be4f0-48552260.jpeg',
      location: 'ffff',
      lostStatus: 'LOSTED',
      title: 'ffff',
      userIdx: 2,
      userName: 'admin',
      userStudentId: '1234',
    },
  ];

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
          {losts.map(({ idx, imageUrl, content, location, createdAt, lostStatus }) => (
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
          ))}
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
