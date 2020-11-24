import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BiSearch } from 'react-icons/bi';

import './Suggest.scss';
import SERVER from '../../config/server';

const ArticleStatus = {
  COMPLETED: '완료',
  NONE: '미완료',
  HOLDED: '보류',
};

const ArticleStatusColor = {
  COMPLETED: 'green',
  NONE: 'red',
  HOLDED: 'black',
};

const Suggest = ({ articles, loadPage, clearArticleStore }) => {
  useEffect(() => {
    loadPage();

    return () => {
      clearArticleStore();
    };
  }, []);

  return (
    <>
      <div className='suggest'>
        <div className='suggest-container'>
          <div className='notice-container-search'>
            <input type='text' placeholder='검색' />
            <BiSearch />
          </div>
        </div>
        <div className='suggest-list'>
          {articles.map(({ idx, image, content, location, status, createdAt }) => {
            return (
              <div className='suggest-list-content' key={idx}>
                <div className='suggest-list-content-image'>
                  {!!image ? (
                    <img
                      className='suggest-list-content-image-fit'
                      src={`${SERVER}/public/${image}`}
                    />
                  ) : (
                    <h4 className='suggest-list-content-image-non_text'>
                      이미지가 존재하지 않는 게시글입니다.
                    </h4>
                  )}
                </div>
                <div className='suggest-list-content-title'>{content}</div>
                <div className='suggest-list-content-place'>{location}</div>
                <div className='suggest-list-content-area'>
                  <div className='suggest-list-content-area-date'>
                    {moment(createdAt).format('YYYY-MM-DD')}
                  </div>
                  <div
                    className='suggest-list-content-area-state'
                    style={{ color: ArticleStatusColor[status] }}
                  >
                    {ArticleStatus[status]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Suggest.propTypes = {
  articles: PropTypes.array,
  loadPage: PropTypes.func,
  clearArticleStor: PropTypes.func,
};

export default Suggest;
