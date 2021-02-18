import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
// import { Payment } from "@material-ui/icons";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //This will run only when the component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser);

      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM Convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
