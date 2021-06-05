import React from "react";
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom";
import ExploreGalleries from "./exploreGalleries";
import DropMagnet from "./dropMagnet";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" render={()=> <Redirect to="/explore-galleries" />}/>
            <Route path="/explore-galleries" component={ExploreGalleries} />
            <Route path="/drop-magnet" component={DropMagnet} />
        </Switch>
    </div>
  );
}

export default App;
