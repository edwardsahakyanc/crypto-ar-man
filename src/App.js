import React from "react";
import './App.css';
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homePage/homePage";
import Footer from "./components/footer/footer";
import {Route, Switch} from "react-router-dom";
import ConnectedWallets from "./pages/connectedWallets/connectedWallets";
import ConnectNewWallet from "./pages/connectNewWallet/connectNewWallet";

function App() {
  return (
    <div className="App">
      <div className="app-content">
          <Navbar/>
          <Switch>
              <Route exact path="/">
                  <div className="homepage">
                      <HomePage/>
                      <Footer/>
                  </div>
              </Route>
              <Route path="/connected-wallets">
                  <ConnectedWallets/>
              </Route>
              <Route path="/create-new-wallet">
                  <ConnectNewWallet/>
              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
