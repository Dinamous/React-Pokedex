// import Axios from 'axios';
import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import api from '../../source/api';
import Categoria from '../Categoria/Categoria';
import './styles.css'
export default class PokemonCard extends Component {

    state = {
        name:'',
        imageURL:'',
        pokemonIndex:'',
        pokemonData:null
    }

    async componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        
        const response = await api.get(`/${pokemonIndex}`);
        this.setState({pokemonData: response.data});
      
        this.setState({ name, imageURL, pokemonIndex});
        
      }


    render() {       

        return (
            <div>
                <Card  bg="dark" variant="dark" className="text-center cartao"
                style={{width:'18rem',margin: '1rem',borderRadius:'1rem'}}>
                    
                    <div className="corfundo">
                    <h5 className="pokemonIndex">#{this.state.pokemonIndex}</h5>
                    <Card.Img variant="top" src={this.state.imageURL} style={{maxWidth:'10rem',marginLeft:'25%'}}/>
                    </div>
                
                <Card.Body>
                    
                    <Card.Title>{
                        this.state.name
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}
                    </Card.Title>
                    <Card.Text>
                         {this.state.pokemonData ? (
                            <Row className="justify-content-md-center"
                            style={{display:'flex',justifyContent:'center'}}>
                            {this.state.pokemonData.types.map(tipo => (
                                <Categoria
                                key={tipo.type.name}
                                categoria={tipo.type.name}/>
                                
                            ))}
                            </Row>
                        ) : (<h6>Carregando...</h6>)}
                    
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
}
