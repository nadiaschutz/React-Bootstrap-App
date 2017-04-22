import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react';
import Home from './containers/home/Home';
import Services from './containers/services/Services';
import Portfolio from './containers/portfolio/Portfolio';
import About from './containers/about/About';
import Contract from './containers/contract/Contract';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contract" component={Contract} />
    </Router>
,
  document.getElementById('root')
);
