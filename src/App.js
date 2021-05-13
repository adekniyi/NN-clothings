import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage'
import ShopPage from './shop/shop.component'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
    </Switch>
  );
}

export default App;
