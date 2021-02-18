import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">

      <First firstname="Doe," lastname="jane" age={40} hair="Black"/>
      
      <First firstname="Fillmore," lastname="John" age={88} hair="Brown" />
      
      <First firstname="Smith," lastname="Millard" age={50} hair="Brown"/>
      
    </div>
  );
}

export default App;
