import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(
    <div className="site-wrapper">
        <Header />
        <Footer />
    </div>
,
  document.getElementById('root')
);
