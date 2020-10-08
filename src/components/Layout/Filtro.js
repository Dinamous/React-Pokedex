import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap';
import api from '../../source/api';
import PokemonCard from '../PokemonCard/PokemonCard';
import loading from '../../25 (1).gif'
export default class Filtro extends Component {

    state = {
        categoria:'',
        pokemonsFiltrados:null,
        carregando:true
    }


    async componentDidUpdate(prevProps){
        const newCategoria = this.props.match.params.categoria;
        const oldCategoria = prevProps.match.params.categoria;

        if(  newCategoria !==  oldCategoria) {
          // fetch the new product based and set it to the state of the component
            this.setState({categoria:newCategoria})
            const response = await api.get(`/type/${newCategoria}`)
            this.setState({pokemonsFiltrados: response.data});
            this.setState({carregando:false})
       };
      };

    async componentDidMount(){
        const categoria = this.props.match.params.categoria;
        console.log(categoria)
        this.setState({categoria:categoria})

        const response = await api.get(`/type/${categoria}`)
        this.setState({pokemonsFiltrados: response.data});
        this.setState({carregando:false})
    }
  
    

    render() {
        const { carregando,pokemonsFiltrados,categoria  } = this.state;

        if (carregando) {
            return(
                <div>
                    <Row className="justify-content-md-center">
                        <img src={loading} alt="" style={{minWidth:'8rem', margin:'5rem'}}/>
                    </Row>
                </div>
            );
          }


        return (

            <div>
                <Row>
                    <Col>
                    <Row className="justify-content-md-center"
                    style={{margin:'2rem 0'}}>
                    <h3>Pókemon Categoria { categoria 
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(' ')}</h3>
                    </Row>
                    
                        <Row className="justify-content-md-center">
                            {pokemonsFiltrados.pokemon.map( pokemon => (
                                <PokemonCard
                                key={pokemon.pokemon.name}
                                name={pokemon.pokemon.name}
                                url={pokemon.pokemon.url}
                                />
                            ))}
        
                        </Row>
                    
                        
                    </Col>
                </Row>
                
            </div>
        )
    }
}
