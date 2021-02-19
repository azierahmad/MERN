import React from 'react';
import Main from './Components/Main';
import { Router } from '@reach/router';
import Detail from './Components/Detail';



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product/"/>
        <Detail path="/:id/detail" />
      </Router>
    </div>
  );
}

export default App;
