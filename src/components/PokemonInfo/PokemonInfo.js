import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import api from "../../source/api";
import Categoria from "../Categoria/Categoria";

import loading from "../../25 (1).gif"
// import './styles.css'
export default class PokemonInfo extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageURL: "",
    pokemonData:null,
    imagemCarregando:true
  };


  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;
    this.setState({ pokemonIndex });
    const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        
    const response = await api.get(`pokemon/${pokemonIndex}`);
    this.setState({pokemonData: response.data});


    this.setState({imageURL})
    const img  = new Image();
        img.src = imageURL;
        img.onload =  () => {
            
            this.setState({ imagemCarregando: false });
          }
  }

  render() {
    const {imagemCarregando,pokemonData} = this.state;

    if(imagemCarregando){
        return(
            <Row className="justify-content-sm-center">
                    <img src={loading} alt="" style={{minWidth:'8rem', margin:'5rem'}}/>
             </Row>
        )
    }


    return (
      <div>
        <Row className="justify-content-sm-center">
          
            <div className="card-button">
              
                <Card
                  id="card-info"
                  bg="dark"
                  variant="dark"
                  className="text-center cartao"
                  style={{
                    width: "64rem",
                    margin: "1rem",
                    borderRadius: "1rem",
                  }}
                >
                  <div className="corfundo">
                    <h5 className="pokemonIndex" id="card-title">
                      #{this.state.pokemonIndex}
                    </h5>

                    <div style={{ display: "flex", alignItems: "center" ,justifyContent:'center'}}>
                      <Card.Img
                        id="imagem-card"
                        variant="top"
                        src={this.state.imageURL}
                        style={{ maxWidth: "15rem"}}
                      />
                    </div>
                  </div>

                  <Card.Body>
                    <Card.Title id="card-title">
                      {pokemonData.name
                        .toLowerCase()
                        .split(" ")
                        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </Card.Title>
                    <Card.Text>
                      {this.state.pokemonData ? (
                        <Row
                          className="justify-content-md-center"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          {this.state.pokemonData.types.map((tipo) => (
                            <Categoria
                              key={tipo.type.name}
                              categoria={tipo.type.name}
                            />
                          ))}
                        </Row>
                      ) : (
                        <div>
                          <p>Carregando</p>
                        </div>
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              
            </div>
        
        </Row>
      </div>
    );
  }
}
