import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = ({ isLogin, logOut }) => {
  console.log(isLogin);
  return (
    <>
      <div className='header'>
        <div className='header-box'>
          <div className='header-box-left'>
            <div className='header-box-left-logo'></div>
            <div className='header-box-left-menu'>
              <NavLink exact to='/' activeClassName='header-box-left-menu-content-selected'>
                <div className='header-box-left-menu-content'>출석현황</div>
              </NavLink>
              <NavLink to='/notice' activeClassName='header-box-left-menu-content-selected'>
                <div className='header-box-left-menu-content'>안내사항</div>
              </NavLink>
              <NavLink to='/suggest' activeClassName='header-box-left-menu-content-selected'>
                <div className='header-box-left-menu-content'>건의사항</div>
              </NavLink>
              <NavLink to='/lost' activeClassName='header-box-left-menu-content-selected'>
                <div className='header-box-left-menu-content'>분실물</div>
              </NavLink>
            </div>
          </div>
          {isLogin ? (
            <div className='header-box-login' onClick={() => logOut()}>
              로그아웃
            </div>
          ) : (
            <NavLink to='/login' activeClassName='onbtn'>
              <div className='header-box-login'>로그인</div>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

Header.propTypes = {};

export default Header;
