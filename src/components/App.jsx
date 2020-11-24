import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import NoticePage from '../pages/NoticePage';
import SuggestPage from '../pages/SuggestPage';
import LostPage from '../pages/LostPage';
import ShowNoticePage from '../pages/ShowNoticePage';
import WriteNoticePage from '../pages/WriteNoticePage';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/notice' component={NoticePage} />
        <Route path='/suggest' component={SuggestPage} />
        <Route path='/lost' component={LostPage} />
        <Route path='/ShowNotice' component={ShowNoticePage} />
        <Route path='/WriteNotice' component={WriteNoticePage} />
      </Switch>
    </div>
  );
};

export default App;
