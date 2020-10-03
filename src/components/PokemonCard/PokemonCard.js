// import Axios from 'axios';
import React, { Component } from 'react'

import Card from 'react-bootstrap/Card';

export default class PokemonCard extends Component {

    state = {
        name:'',
        imageURL:'',
        pokemonIndex:''
    }

    componentDidMount() {
        const { name, url } = this.props;
    
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    
        this.setState({ name, imageURL, pokemonIndex });
      }

    render() {       

        return (
            <div>
                <Card style={{ width: '18rem', margin:' 1rem ' ,borderRadius:'1rem'}} bg="dark" variant="dark" className="text-center">
                <Card.Img variant="top" src={this.state.imageURL} style={{maxWidth:'10rem',marginLeft:'25%'}}/>
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>
                    #{this.state.pokemonIndex}
                    </Card.Text>
                    
                </Card.Body>
                </Card>
            </div>
        )
    }
}
