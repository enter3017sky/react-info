import React, { Component } from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar'
import Container from '../Container/Container'
import Footer from '../Footer/Footer'

class App extends Component {
    render() {
        return (
        <div className="wrap">
            <Navbar />
            <div className="main">
                <Container />
            </div>
            <Footer />
        </div>
        );
    }
}

export default App;
