import React from 'react';
import './App.css';
import Dashboard from './components/Layout/Dashboard';
import Menu from './components/Layout/Menu'

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Container>
        <Dashboard/>
      </Container>
    </div>
  );
}

export default App;