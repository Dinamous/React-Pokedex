import React from 'react';
import './App.css';
import Dashboard from './components/Layout/Dashboard';
import Menu from './components/Layout/Menu'
import PokemonInfo from './components/PokemonInfo/PokemonInfo'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Filtro from './components/Layout/Filtro';
import PokemonBusca from './components/PokemonBusca/PokemonBusca';

function App() {
  return (
    <Router>

    
    <div className="App">
      <Menu/>
      <Container>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/tipo/:categoria" component={Filtro}/>
          <Route exact path="/pokemon/:pokemonIndex" component={PokemonInfo}/>
          <Route exact path="/buscar/:pokemonName" component={PokemonBusca}/>
        </Switch>
      </Container>
    </div>

    </Router>
  );
}

export default App;
