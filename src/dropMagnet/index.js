import React from "react";
import {Route} from "react-router-dom"
import SliderPage from "./pages/sliderPage";
import Navbar from "./components/navbar/navbar";
import CryptoArtManPage from "./pages/cryptoartman/cryptoartmanPage";

const DropMagnet = () => {
	return (
		<div>
			<Navbar/>
			<Route exact path="/drop-magnet/artgallery.link">
				<SliderPage/>
			</Route>
			<Route path="/drop-magnet/artgallery.link/cryptoartman">
				<CryptoArtManPage/>
			</Route>
		</div>

	)
}

export default DropMagnet