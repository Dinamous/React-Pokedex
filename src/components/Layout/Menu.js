import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../../App.css";
import api from "../../source/api";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
export default class Menu extends Component {
  state = {
    tipos: null,
    pesquisa:''
  };

  handleChange(event) {
    this.setState({pesquisa:event.target.value})
  }

  async componentDidMount() {
    const response = await api.get("type");
    this.setState({ tipos: response.data["results"] });
    //console.log(this.state.tipos)
  }
  render() {


    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            React Pókedex
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`/RA`}>
                RA
            </Nav.Link>
            <Nav.Link href={`/3D`}>
              
                3D
             
            </Nav.Link>

            <NavDropdown title="Filtrar por Categoria" id="basic-nav-dropdown">
              {this.state.tipos ? (
                this.state.tipos.map((tipo) => (
                  <LinkContainer
                  key={tipo.name}
                  to={`/tipo/${tipo.name}`}>
                    <NavDropdown.Item>
                      {tipo.name
                        .toLowerCase()
                        .split(" ")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </NavDropdown.Item>
                  </LinkContainer>

                  //
                ))
              ) : (
                <p>Carregando</p>
              )}
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Procurar Pókemon"
              className="mr-sm-2"
              onChange={this.handleChange.bind(this)}
            />
            <LinkContainer to={`/buscar/${this.state.pesquisa}`}>
            <Button variant="outline-success" type="submit" style={{ margin: " .5rem 0 " }}>
              Buscar
            </Button>
            </LinkContainer>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
