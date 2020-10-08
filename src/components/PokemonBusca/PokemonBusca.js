import React, { Component } from "react";
import api from "../../source/api";
import { Redirect } from "react-router-dom";
import { Card } from "react-bootstrap";

import "./styles.css";
export default class PokemonBusca extends Component {
  state = {
    pokemon: null,
    carregando: true,
    encontrouPokemon: false,
  };

  async componentDidUpdate(prevProps) {
    const newPokemon = this.props.match.params.pokemonName;
    const oldPokemon = prevProps.match.params.PokemonName;

    if (newPokemon !== oldPokemon) {
      // fetch the new product based and set it to the state of the component
      await api
        .get(`pokemon/${newPokemon}`)
        .then((response) => {
          this.setState({ pokemon: response.data.id });
          this.setState({ encontrouPokemon: true });
        })
        .catch((error) => {
          this.setState({ encontrouPokemon: false });
        });
    }
  }

  async componentDidMount() {
    const { pokemonName } = this.props.match.params;

    await api
      .get(`pokemon/${pokemonName}`)
      .then((response) => {
        this.setState({ pokemon: response.data.id });
        this.setState({ encontrouPokemon: true });
      })
      .catch((error) => {
        this.setState({ encontrouPokemon: false });
      });

    this.setState({ carregando: false });
  }

  render() {
    const { pokemon, encontrouPokemon } = this.state;

    if (encontrouPokemon) {
      return (
        <div>
          return <Redirect to={`/pokemon/${pokemon}`} />
        </div>
      );
    } else {
      if (!encontrouPokemon) {
        return (
          <div className="justify-content-sm-center">
            <Card
              id="card"
              bg="dark"
              variant="dark"
              className="text-center cartao2"
            >
              <Card.Body>
                Infelizmente não conseguimos encontrar este Pókemon.
              </Card.Body>
            </Card>
          </div>
        );
      }
    }
  }
}
