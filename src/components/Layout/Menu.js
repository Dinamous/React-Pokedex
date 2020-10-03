import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


import '../../App.css'

export default class Menu extends Component {
    render() {
        return (
           

        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React Pókedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">RA</Nav.Link>
            <NavDropdown title="Filtrar por Categoria" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Lutador</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Planta</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Venenoso</NavDropdown.Item>
                
            </NavDropdown>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Procurar Pókemon" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
        </Form>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}
