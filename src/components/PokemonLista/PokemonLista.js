import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

import Row from 'react-bootstrap/Row';
import api from '../../source/api';
export default class PokemonLista extends Component {

    state = {
       url:' https://pokeapi.co/api/v2/pokemon',
       pokemon:null
    }

    async componentDidMount(){
        const response = await api.get('?limit=151');
        this.setState({pokemon: response.data['results']});
    }


    render() {
        return (
            <div>
            {this.state.pokemon ? (
                <Row className="justify-content-md-center">
                    {this.state.pokemon.map( pokemon => (
                        <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        />
                    ))}
                </Row>)
            : (<h1>Carregando...</h1>)}
        </div>
        )
    }
}
