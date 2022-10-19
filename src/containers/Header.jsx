import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoImage from "../logo.png";
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="website_title__div">
          {/* <MessageIcon
          color="primary"
          sx={{ fontSize: 50 }}
          
        /> */}
          <img src={LogoImage} alt="website-logo" className="website__logo" />
          <h1 className="website__title">TechForNerd</h1>
        </div>
        <div className="website_menu_div">
          <MenuUl>
            <MenuLi to="/">
              Home <KeyboardArrowDownIcon />
            </MenuLi>
            <MenuLi to="/blog">
              Blog <KeyboardArrowDownIcon />
            </MenuLi>
            <MenuLi to="/internet">
              Internet <KeyboardArrowDownIcon />
            </MenuLi>
            <MenuLi to="/about">About</MenuLi>
            <MenuLi to="/contact-us">Contact Us</MenuLi>
          </MenuUl>
        </div>
        <div className="nav__right">
          <button className="nav_right_button" type="button">Subscribe!</button>
          <IconButton>
          <SearchIcon  className="nav_right_unused_bt" sx={{fontSize:[35], color:'gray'}}/>
          </IconButton>
          <IconButton>
          <MenuOpenIcon className="nav_right_unused_bt" sx={{fontSize:[35], color:'gray'}}/>
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

function MenuUl({ children }) {
  return <ul className="menu_ul_list">{children}</ul>;
}

function MenuLi(props) {
  return (
    <li className="menu_list">
      <Link to={props.to}>{props.children}</Link>
    </li>
  );
}

export default Header;
