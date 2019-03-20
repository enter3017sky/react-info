import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

import './Navbar.css'

class NavCustom extends Component {
    render() {
        return (
            <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
                <Navbar.Brand>
                    <i class="fab fa-react mr-2"></i>
                    enter301s7ky's Projects
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="ml-3 nav-link " href="https://github.com/enter3017sky" target="blank"><i className="fab fa-github mr-1"></i>Github</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavCustom