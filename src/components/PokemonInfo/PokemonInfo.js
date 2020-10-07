import React, { Component } from 'react'

export default class PokemonInfo extends Component {

    state = {
        name:'',
        pokemonIndex:'',
        imageURL:''
    }

    async componentDidMount(){
        const {pokemonIndex} = this.props.match.params;
        this.setState({pokemonIndex})
    }

    render() {
        return (
            <div>
                {this.state.pokemonIndex}
                hello
            </div>
        )
    }
}
