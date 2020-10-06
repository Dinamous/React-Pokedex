import React, { Component } from 'react'
import { Row } from 'react-bootstrap';
import api from '../../source/api';
import Categoria from '../Categoria/Categoria';

export default class Filtro extends Component {

    state = {
        tipos:null
    }

    async componentDidMount(){
        const response = await api.get('type');
        this.setState({tipos: response.data['results']});
        console.log(this.state.tipos)
    }

    render() {
        return (
            <div>
                 {this.state.tipos ? (
                            <Row className="justify-content-md-center"
                            style={{display:'flex',justifyContent:'center'}}>
                            {this.state.tipos.map(tipo => (
                                <Categoria
                                key={tipo.name}
                                categoria={tipo.name}/>
                                
                            ))}
                            </Row>
                        ) : (<div><p>Carregando</p></div>)}
                
            </div>
        )
    }
}
