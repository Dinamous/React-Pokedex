import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

import Row from 'react-bootstrap/Row';
export default class PokemonLista extends Component {
    render() {
        return (
            <Row className="justify-content-md-center">
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
            </Row>
        )
    }
}
