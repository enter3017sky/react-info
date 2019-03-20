import React, { Component } from 'react';
import './App.css';


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../Navbar/Navbar'
import Container from '../Container/Container'
import Footer from '../Footer/Footer'

import { HashRouter as Router, Route } from "react-router-dom";

// library.add(faIgloo)


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
