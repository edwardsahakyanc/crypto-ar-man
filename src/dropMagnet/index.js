import React from "react";
import {Redirect, Route} from "react-router-dom"
import SliderPage from "./pages/sliderPage";
import Navbar from "./components/navbar/navbar";
// import CryptoArtManPage from "./pages/cryptoartman/cryptoartmanPage";
// import VericalySlidedPage from "./pages/vericalySlidedPage/vericalySlidedPage";
import ScrollSnapPage from "./pages/scrollSnapPage/ScrollSnapPage";

const DropMagnet = () => {
	return (
		<div>
			<Route exact path="/drop-magnet" render={()=> <Redirect to="/drop-magnet/artgallery.link" />}/>
			<Route exact path="/drop-magnet/artgallery.link">
				<Navbar path={'/drop-magnet/artgallery.link'} text={'ArtGallery.Link'}/>
				<SliderPage/>
			</Route>



			{/*<Route path="/drop-magnet/artgallery.link/cryptoartman">*/}
			{/*	<Navbar path={'/drop-magnet/artgallery.link/cryptoartman'} text={'Mag.Link/CryptoArtMan'}/>*/}
			{/*	<CryptoArtManPage/>*/}
			{/*</Route>*/}
			{/*<Route path="/drop-magnet/artgallery.link/newcryptoartman">*/}
			{/*	<VericalySlidedPage/>*/}
			{/*</Route>*/}



			<Route path="/drop-magnet/artgallery.link/verticaly">
				<ScrollSnapPage/>
			</Route>
		</div>

	)
}

export default DropMagnet