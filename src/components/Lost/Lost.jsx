import React from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import './Lost.scss';

const Lost = ({}) => {
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
          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>

          <div className='lost-list-content'>
            <div className='lost-list-content-image'></div>
            <div className='lost-list-content-title'>청소기주세요.</div>
            <div className='lost-list-content-place'>503호</div>
            <div className='lost-list-content-area'>
              <div className='lost-list-content-area-date'>2020-11-23</div>
              <div className='lost-list-content-area-state' style={{ color: '#C41E1E' }}>
                미완료
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Lost.propTypes = {};

export default Lost;
