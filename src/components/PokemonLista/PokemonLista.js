import React, { Component } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

import Row from 'react-bootstrap/Row';
import api from '../../source/api';

import loading from '../../25 (1).gif'
export default class PokemonLista extends Component {

    state = {
       url:' https://pokeapi.co/api/v2/pokemon',
       pokemon:null,    
    }

    async componentDidMount(){
        const response = await api.get('pokemon/?limit=151');
        this.setState({pokemon: response.data['results']});
    }


    render() {
        return (
            <div>
            {this.state.pokemon ? (
                <Row className="justify-content-md-center"
                style={{display:'flex',justifyContent:'center'}}>
                    {this.state.pokemon.map( pokemon => (
                        <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                        />
                    ))}
 
                </Row>)
            : (
                <Row className="justify-content-sm-center"
                style={{display:'flex',justifyContent:'center'}}
                >
                    <img src={loading} alt="" style={{minWidth:'8rem', margin:'5rem'}}/>
                </Row>
                

            )}
        </div>
        )
    }
}
