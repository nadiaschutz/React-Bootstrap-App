import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import './Header.css';
import logo from './../../logo.svg';
import NoMatch from './../../containers/nomatch/NoMatch';
import Home from './../../containers/home/Home';
import Services from './../../containers/services/Services';
import About from './../../containers/about/About';
import Portfolio from './../../containers/portfolio/Portfolio';
import Contact from './../../containers/contact/Contact';
import Authentication from './../authentication/Authentication';
import Reddit from './../reddit/Reddit';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
     }

     handleChange(event) {
      this.setState({value: event.target.value});
    }

     handleSearch(event) {
       alert('Search query was submitted: ' + this.state.value);
       event.preventDefault();
     }

  render() {
    return (
        <BrowserRouter>
        <div className="content">
        <nav className="navbar navbar-toggleable-md navbar-inverse  bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="https://wuno.com"><img src={logo} className="App-logo" alt="logo" /></a>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink exact={true} to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
            <form onSubmit={this.handleSearch} className="form-inline mt-2 mt-md-0">
              <input  value={this.state.value} onChange={this.handleChange}  className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-wuno my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/authentication" component={Authentication} />
              <Route path="/reddit" component={Reddit} />
              <Route component={NoMatch} />
              </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default Header;
