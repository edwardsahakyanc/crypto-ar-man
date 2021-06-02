import React from "react";
import './App.scss';
import {NavLink, Route, Switch} from "react-router-dom";
import ExploreGalleries from "./exploreGalleries";
import DropMagnet from "./dropMagnet";

function App() {
  return (
    <div className="App">
        <NavLink to="/explore-galleries">ExploreGalleries</NavLink>
        <NavLink to="/drop-magnet/artgallery.link">DropMagnet artgallery</NavLink>
        <NavLink to="/drop-magnet/artgallery.link/cryptoartman">DropMagnet cryptoartman</NavLink>
        <Switch>
            <Route path="/explore-galleries">
                <ExploreGalleries/>
            </Route>
            <Route path="/drop-magnet">
                <DropMagnet/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
