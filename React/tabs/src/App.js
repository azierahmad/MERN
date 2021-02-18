import logo from './logo.svg';
import Tabs from './components/Tabs'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Evreyone</h1>
      <Tabs> 
       <div label="Tab 1" className="tab11"> 
       Tab 1 content is showing here!! 
       </div> 
       <div label="Tab 2" className="tab11"> 
       Tab 2 content is showing here!! 
       </div> 
       <div label="Tab 3" className="tab11"> 
         Tab 3 content is showing here! 
       </div> 
     </Tabs> 
    </div>
  );
}

export default App;
