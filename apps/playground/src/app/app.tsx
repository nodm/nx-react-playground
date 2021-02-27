import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import { News } from '@nx-react-playground/playground/news';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/news">
            <News />
          </Route>

          <Redirect to="/news" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
