import React, { Component } from 'react'
import PokemonLista from '../PokemonLista/PokemonLista'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import api from '../../source/api';

export default class Dashboard extends Component {

    state = {
        // listaFiltrada:null,
        // ger1:null,
        // resultante:null
        categoria:'',
    }

    async componentDidMount(){
        const {categoria} = this.props.match.params;
        this.setState({categoria})
        // console.log(categoria)
        // const response = await api.get(`type/${categoria}`)
        // const res = await api.get(`generation/1`)
        // this.setState({listaFiltrada: response.data['pokemon']})
        // this.setState({ger1: res.data['pokemon_species']})

        // const resultante = this.state.listaFiltrada.filter(value => this.state.ger1.includes(value))
        
        // this.setState({resultante})
        
        // console.log(this.state.listaFiltrada)
    }


    render() {
        return (
            <div >
                <Row>
                    <Col>
                        
                            <PokemonLista filtro={this.state.categoria}/>
                        
                        
                    </Col>
                </Row>
            </div>
        )
    }
}
