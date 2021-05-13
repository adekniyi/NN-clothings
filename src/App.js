import './App.css';
import HomePage from './HomePage'
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      {/* <Route path="/hats" component={HatPage}/> */}
    </Switch>
  );
}

export default App;
