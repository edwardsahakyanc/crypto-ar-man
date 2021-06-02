import React from "react";
import './App.scss';
import {Route, Switch} from "react-router-dom";
import ExploreGalleries from "./exploreGalleries";
import DropMagnet from "./dropMagnet";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/explore-galleries" component={ExploreGalleries} />
            <Route path="/drop-magnet" component={DropMagnet} />
        </Switch>
    </div>
  );
}

export default App;
