import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import api from "../../source/api";
import Categoria from "../Categoria/Categoria";

import loading from "../../25 (1).gif"
import { Col, Container } from "react-bootstrap";
// import './styles.css'
export default class PokemonInfo extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageURL: "",
    pokemonData:null,
    imagemCarregando:true,
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    specialAttack: '',
    specialDefense: ''
  };


  async componentDidMount() {
    const { pokemonIndex} = this.props.match.params;
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

    let { hp, attack, defense, speed, specialAttack, specialDefense } = '';
    this.state.pokemonData.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat['base_stat'];
          break;
        case 'attack':
          attack = stat['base_stat'];
          break;
        case 'defense':
          defense = stat['base_stat'];
          break;
        case 'speed':
          speed = stat['base_stat'];
          break;
        case 'special-attack':
          specialAttack = stat['base_stat'];
          break;
        case 'special-defense':
          specialDefense = stat['base_stat'];
          break;
        default:
          break;
      }
      return null
  });

  this.setState({ 
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense})
}

  render() {
    const {
    imagemCarregando,
    hp,
    attack,
    defense,
    speed,
    specialAttack,
    specialDefense,
    pokemonData} = this.state;

    if(imagemCarregando){
        return(
            <Row className="justify-content-sm-center">
                    <img src={loading} alt="" style={{minWidth:'8rem', margin:'5rem'}}/>
             </Row>
        )
    }


    return (
      <div>
        <Row className="justify-content-sm-center"
        style={{display:'flex',justifyContent:'center'}}>
          
            <div className="card-button">
              
                <Card
                  id="card-info"
                  bg="dark"
                  variant="dark"
                  className="text-center cartao"
                  style={{
                    width: "80vw",
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
              

                <Card
                  id="card-info"
                  bg="dark"
                  variant="dark"
                  className="text-center cartao"
                  style={{
                    width: "80vw",
                    margin: "1rem",
                    borderRadius: "1rem",
                    padding:'1rem'
                  }}
                >
                  <Container className="justify-content-sm-center">
                    <h2 style={{margin:'1rem',color:'#28A745'}}>Status do Pókemon</h2>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>HP</h5></Col>
                     <Col style={{alignItems:'right'}}   sm={8}><ProgressBar variant="danger" now={hp} label={`${hp}`} /></Col>
                  </Row>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>Ataque</h5></Col>
                     <Col style={{alignItems:'right'}} sm={8}><ProgressBar  variant="success" now={attack} label={`${attack}`} /></Col>
                  </Row>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>Defesa</h5></Col>
                     <Col style={{alignItems:'right'}} sm={8}><ProgressBar variant="success" now={defense} label={`${defense}`} /></Col>
                  </Row>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>Velocidade</h5></Col>
                     <Col style={{alignItems:'right'}} sm={8}><ProgressBar  variant="warning" now={speed} label={`${speed}`} /></Col>
                  </Row>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>Ataque Especial</h5></Col>
                     <Col style={{alignItems:'right'}} sm={8}><ProgressBar striped variant="success" now={specialAttack} label={`${specialAttack}`} /></Col>
                  </Row>
                  <Row className="justify-content-sm-center"
                  style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'1rem 0'}}>
                
                     <Col style={{alignItems:'left'}} md="3" sm={4}> <h5>Defesa Especial</h5></Col>
                     <Col style={{alignItems:'right'}} sm={8}><ProgressBar striped variant="success" now={specialDefense} label={`${specialDefense}`} /></Col>
                  </Row>
                  
                  </Container>
                </Card>

            </div>
        
        </Row>
      </div>
    );
  }
}
