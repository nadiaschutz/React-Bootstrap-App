import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div>
        <footer className="footer bg-inverse">
            <div className="container">
                <p className="text-muted">Place sticky footer content here.</p>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
