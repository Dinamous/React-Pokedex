import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default class Menu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">React Pókedex</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">RA</Nav.Link>
                    <NavDropdown title="Filtrar por Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Normal</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Lutador</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Voador</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Venenoso</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Procurar Pókemon" className="mr-sm-2" />
                    <Button variant="outline-info">Buscar</Button>
                </Form>
            </Navbar>
        )
    }
}
