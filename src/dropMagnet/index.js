import React, {useState} from "react";
import {Redirect, Route} from "react-router-dom"
import SliderPage from "./pages/sliderPage";
import Navbar from "./components/navbar/navbar";
// import CryptoArtManPage from "./pages/cryptoartman/cryptoartmanPage";
// import VericalySlidedPage from "./pages/vericalySlidedPage/vericalySlidedPage";
import ScrollSnapPage from "./pages/scrollSnapPage/ScrollSnapPage";
import FileMenu from "../myGallery/fileMenu/fileMenu";
import CircleIcon from "./components/newUserContent/styled-components/icon-wrapper";
import blackSetting from "./assets/settings-black.svg";
import setting from "./assets/settings-2.svg";
import styled from "styled-components";

const HeaderIcon = styled.div`
    position: fixed;
    z-index: 18;
    left: 185px;
    top: 16px;
`;

const HeaderTop = styled.div`
  height: 68px;
  position: fixed;
  top: 0;
  z-index: 19;
`;

const DropMagnet = () => {

	const [editedActive, setEditedActive] = useState(false);

	const [darkTheme, setDarkTheme] = useState(false);
	console.log(setDarkTheme)
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
				<HeaderTop>
					<FileMenu/>
				</HeaderTop>
				<HeaderIcon key='2342234' onClick={() => {
					setEditedActive(!editedActive)
				}}>
					<CircleIcon imgUrl={darkTheme ? blackSetting : setting} alt={"icon"} className={darkTheme ? 'header-edit' : 'header-edit-black'}/>
				</HeaderIcon>
				<ScrollSnapPage editedActive={editedActive} setEditedActive={setEditedActive} darkTheme={darkTheme}/>
			</Route>
		</div>

	)
}

export default DropMagnet