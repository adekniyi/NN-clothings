import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './HomePage'
import ShopPage from './shop/shop.component'
import Header from './components/header/header.component';


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
    </>
  );
}

export default App;
