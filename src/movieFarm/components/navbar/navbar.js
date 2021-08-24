import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Navigation = styled.nav`
  display: flex;
  align-items: baseline;
  padding: 16px 0;
  margin: 0;
  position: fixed;
  z-index: 1000;
  background #fff;
  
  &.navbar {
    opacity: 0;
    animation: fade 2s ease forwards;  
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;


const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  &.logo {
    a {
      font-size: 24px;
      margin-left: 32px;      
      max-width: 120px;
      display: block;
      text-align: center;
      font-family: oskar,sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      span{
        font-size: 20px;
      }
    }
  }
  
  a {
    text-decoration: none;
    font-size: 16px;
    color: #000;
    margin-right: 48px;
    font-weight: 400
  }
  
  &.link{
    a.active{
      color: #8841FB;
    }
  }  
`;

const NavItems = styled.ul`
  display: flex;
  padding: 0;
`;

const PlayDmt = styled.button`
   padding: 13px 18px 9.5px 18px;
   border-radius: 23.5px;
   border: 1px solid #000;
   background: none;
   font-weight: 500;
   font-size: 16px;
   cursor: pointer;
   position: absolute;
   right: 16px;
`;

const Navbar = () => {
    return (
        <Navigation className='navbar'>
            <ListItem className='logo'>
                <NavLink to='/movie-farm'>
                    M<span>ovie</span>F<span>arm</span>
                </NavLink>
            </ListItem>
            <NavItems>
                <ListItem className='link'>
                    <NavLink to='/movie-farm/movie-key'>MovieKey</NavLink>
                </ListItem>
                <ListItem className='link'>
                    <NavLink to='/movie-farm/nfts'>NFTs</NavLink>
                </ListItem>
                <ListItem className='link'>
                    <NavLink to='DMTs'>DMTs</NavLink>
                </ListItem>
                <ListItem className='link'>
                    <NavLink to='/movie-farm/blog'>Blog</NavLink>
                </ListItem>
            </NavItems>

            <PlayDmt>
                Play DMT
            </PlayDmt>
        </Navigation>
    )
}

export default Navbar;