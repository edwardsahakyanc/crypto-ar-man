import React from "react";
import './App.scss';
import {Route, Switch, Redirect} from "react-router-dom";
import ExploreGalleries from "./exploreGalleries";
import DropMagnet from "./dropMagnet";
import MyGallery from "./myGallery";
import Politician from './dropMagnet/components/politician/politician';
import MovieFarm from "./movieFarm";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" render={()=> <Redirect to="/explore-galleries" />}/>
            <Route path="/explore-galleries" component={ExploreGalleries} />
            <Route path="/drop-magnet" component={DropMagnet} />
            <Route path="/my-gallery" component={MyGallery} />
            <Route path="/politician" component={Politician} />
            <Route path="/movie-farm" render={() => <MovieFarm/>}/>
        </Switch>
    </div>
  );
}

export default App;
