import React from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homePage/homePage";
import Footer from "./components/footer/footer";
import {Route, Switch} from "react-router-dom";
import ConnectedWallets from "./pages/connectedWallets/connectedWallets";

function App() {
  return (
    <div className="App">
      <div className="w-100">
          <Navbar/>
          <Switch>
              <Route exact path="/">
                  <HomePage/>
                  <Footer/>
              </Route>
              <Route path="/connected-wallets">
                  <ConnectedWallets/>
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
