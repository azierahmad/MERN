import React, { useState } from "react";
import Form from './Components/Form'
import Results from './Components/Results'
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState ] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  return (
    <div className="App">
      <Form inputs={state} setInputs={setState}/>
      <Results data={state} />
    </div>
  );
}

export default App;
