import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Header/Login/Login';
import MyOrders from './Pages/Header/MyOrders/MyOrders';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/placeOrder/:id'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
