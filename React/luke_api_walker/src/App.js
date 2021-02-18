import React from 'react';

import { Router } from '@reach/router';
import People from './Components/People';
import Planets from './Components/Planets';
import Form1 from './Components/Form1';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form1 />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
