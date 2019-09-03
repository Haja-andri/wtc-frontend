import React from 'react';
import { Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from './views/Home';
import Location from './views/Location';
import SearchPage from './views/SearchPage';
import Login from './views/Login';
import Registration from './views/Registration';
import GitHub from './views/GitHubAuth';
import FindAccount from './views/FindAccount';
import ResetPassword from './views/ResetPassword';




library.add(fab)
const App = () => {
  return (
    <div>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/location/:id" render={props => <Location {...props} />} />
      <Route path="/locations" render={props => <SearchPage {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/find-account" render={props => <FindAccount {...props} />} />
      <Route path="/signup" render={props => <Registration {...props} />} />
      <Route path="/gitAuth" render={props => <GitHub {...props} />} />
      <Route path="/reset-password" render={props => <ResetPassword {...props} />} />
    </div>
  );
}

export default App;
