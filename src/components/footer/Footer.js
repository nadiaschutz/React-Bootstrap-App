import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="footer bg-inverse">
            <div className="container">
                <p className="text-muted"><a className="wuno-color" href="https://wuno.com">wunO.com</a> &copy; 2012 - {new Date().getFullYear()}</p>
                <p className="wuno-color">Creative Designs From Creative Minds</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
