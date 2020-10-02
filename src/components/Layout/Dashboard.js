import React, { Component } from 'react'
import PokemonLista from '../PokemonLista/PokemonLista'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Dashboard extends Component {
    render() {
        return (
            <div >
                <Row>
                    <Col>
                        <PokemonLista/>
                    </Col>
                </Row>
            </div>
        )
    }
}
