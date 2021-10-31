import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Login from "./Pages/Header/Login/Login";
import ManageAllOrders from "./Pages/Header/ManageAllOrders/ManageAllOrders";
import MyOrders from "./Pages/Header/MyOrders/MyOrders";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import NotFound from "./Pages/NotFound/NotFound";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
