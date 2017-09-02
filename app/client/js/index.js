import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import React from 'react';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/Modules/404';
import store from './store';

const main = require('../sass/main.scss');

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/tag/:tag" component={Home} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
), document.getElementById('app'));
