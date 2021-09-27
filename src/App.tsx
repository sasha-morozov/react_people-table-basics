import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import { MainNavigation } from './components/MainNavigation';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.scss';

const App = () => (
  <div className="App">
    <MainNavigation />

    <div className="container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/people" component={PeoplePage} />

      <Redirect path="/home" to="/" />

      <NotFoundPage />
    </Switch>
    </div>
  </div>
);

export default App;
