import React from 'react';

import './styles/App.css';
import api from '../source/api'


function App() {
  return (
    <div class="container">
      <h1>Pokedex</h1>
      <ul data-js="pokedex" class="pokedex"></ul>
  </div>
  );
}

export default App;
