import React from 'react';

import { Router } from '@reach/router';
import Home from './Components/Home';
import Hello from './Components/Hello';
import Four from './Components/Four';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/hello" />
        <Four path="/:id" />
      </Router>
    </div>
  );
}

export default App;
