import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


import NoMatch from './../../containers/nomatch/NoMatch';
import Home from './../../containers/home/Home';
import Services from './../../containers/services/Services';
import About from './../../containers/about/About';
import Portfolio from './../../containers/portfolio/Portfolio';
import Contact from './../../containers/contact/Contact';

class Header extends Component {

  render() {
    return (
        <BrowserRouter>
        <div className="Header">
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/services">Services</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/portfolio">Portfolio</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>


              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={NoMatch} />
            </div>
        </BrowserRouter>
    );
  }
}

export default Header;
