// import Axios from 'axios';
import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import api from '../../source/api';
import Categoria from '../Categoria/Categoria';


import './styles.css'
export default class PokemonCard extends Component {

    state = {
        name:'',
        imageURL:'',
        pokemonIndex:'',
        pokemonData:null,
        imagemCarregando:true,
        muitasRequisicoes:false,
        filtroCategoria:'',
    }

    async componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        
        const response = await api.get(`pokemon/${pokemonIndex}`);
        this.setState({pokemonData: response.data});
      
        this.setState({ name, imageURL, pokemonIndex});
        
      }


    render() {       

        return (
            
            <div className="card-button">
            
                <Link to={`/pokemon/${this.state.pokemonIndex}`} style={{textDecoration:'none',color:'white'}}>
                <Card  id="card"bg="dark" variant="dark" className="text-center cartao"
                style={{width:'18rem',margin: '1rem',borderRadius:'1rem'}}>
                    
                    <div className="corfundo" >
                    <h5 className="pokemonIndex" id="card-title">#{this.state.pokemonIndex}</h5>
                
                    <div style={{display:'flex', alignItems:'center'}}>
                        <Card.Img id="imagem-card"
                        variant="top" 
                        src={this.state.imageURL} 
                        style={{maxWidth:'10rem',marginLeft:'25%'}}
                        onload={()=> {this.setState({imagemCarregando:false})}}
                        onError={()=> {this.setState({muitasRequisicoes:true})}}
                        />
                    </div>
                    
                    </div>
                
                <Card.Body>
                    
                    <Card.Title id="card-title">{
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
                        ) : (<div><p>Carregando</p></div>)}
                    
                    </Card.Text>
                    
                </Card.Body>
                </Card>
                </Link>
            </div>
        )
    }
}
