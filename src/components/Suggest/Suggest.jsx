import React from 'react';
import PropTypes from 'prop-types';
import './Suggest.scss';
import { BiSearch } from 'react-icons/bi';

const Suggest = ({}) => {
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
          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='suggest-list-content'>
            <div className='suggest-list-content-image'></div>
            <div className='suggest-list-content-title'>청소기주세요.</div>
            <div className='suggest-list-content-place'>503호</div>
            <div className='suggest-list-content-area'>
              <div className='suggest-list-content-area-date'>2020-11-23</div>
              <div className='suggest-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Suggest.propTypes = {};

export default Suggest;
