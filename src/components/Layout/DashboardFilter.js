import React, { Component } from "react";
import PokemonLista from "../PokemonLista/PokemonLista";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Dashboard extends Component {
  state = {
    categoria: "",
  };

  async componentDidMount() {
    const { categoria } = this.props.match.params;
    this.setState({ categoria });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <PokemonLista filtro={this.state.categoria} />
          </Col>
        </Row>
      </div>
    );
  }
}
