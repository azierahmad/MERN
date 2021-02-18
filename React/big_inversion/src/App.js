import Components from './Components/PersonCard';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname="doe," lastname="jane" age ={45} haircolor="black" />
      <PersonCard firstname="smith," lastname="john" age ={88} haircolor="brown" />
      <PersonCard firstname="fillmore," lastname="millard" age ={50} haircolor="brown" />
      <PersonCard firstname="smith," lastname="maria" age ={62} haircolor="brown" />
    </div>
  );
}

export default App;
