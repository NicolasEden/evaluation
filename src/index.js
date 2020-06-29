import React from 'react';
import ReactDOM from 'react-dom';
import Bridge from './bridge';
import Save from './saved';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
            <Route path="/apparts">
              <Bridge />
            </Route>
            <Route exact path="/">
              <h1><a href="/apparts">Salut, clique sur moi pour être au bon endroit !</a></h1>
            </Route>
            <Route exact path="/saved">
                <Save />
            </Route>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
