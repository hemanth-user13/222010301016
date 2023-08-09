import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from './components/AllTrainsPage';
import SingleTrainPage from './components/SingleTrainPage';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/trains/:trainId">
            <SingleTrainPage />
          </Route>
          <Route path="/">
            <AllTrainsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;