import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
