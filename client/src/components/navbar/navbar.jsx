import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { StyledDiv } from "./styled";
import { useAuth } from "../../contexts/AuthContext";
import delivery from "../../assets/images/delivery-truck.png";
import instagram from "../../assets/images/instagram.jpeg";
import twitter from "../../assets/images/gorjeo(1).jpeg";
import whatsapp from "../../assets/images/Loco wsap.jpeg";
import facebook from "../../assets/images/logo-de-facebook.jpeg";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import user from "../../assets/images/user.png";
import Auto from "../searchbar/searchbar";
import NavModal from "../navModal/navModal";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const { currentUser, logout } = useAuth();

  const handleLogOut = async () => {
    await logout()
    setIsOpen(false)
  }

  const style = {
    marginTop: "1%",
  };

  return (
    <StyledDiv>
      <div className="header-container">
        <div className="help-menu-izq col-sm-3 col-md-3 col-lg-3" style={style}>
          <img
            className="delivery"
            src={delivery}
            alt="delivery img"
            width="22px"
          ></img>
          <i className="text-envio">Envíos sin cargo a CABA y GBA</i>
          <ul className="row">
            <a href="https://wa.link/sxenpo" className="col-2">
              <img alt="whatsapp img" src={whatsapp} width="22px" />
            </a>
            <a href="https://www.facebook.com/" className="col-2">
              <img alt="facebook img" src={facebook} width="20px" />
            </a>
            <a href="https://www.instagram.com/" className="col-2">
              <img alt="instagram img" src={instagram} width="20px" />
            </a>
            <a href="https://twitter.com/" className="col-2">
              <img alt="twitter img" src={twitter} width="20px" />
            </a>
          </ul>
        </div>
        <div className="logo col-sm-6 col-md-4 col-lg-4">
          <a className="link-logo" href="/home">
            <img
              className="img-responsive"
              src={logo}
              alt="logo img"
              width="360px"
            ></img>
          </a>
        </div>
        <div className="help-menu">
          <div className="Auto">
            <Auto />
          </div>
          <ul className="d-flex">
            <a href="compras" className="carrito">
              <img className="cart" alt="cart img" src={cart} width="20px" />
            </a>
            {currentUser ? (
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/dashboard">Edit Profile</Dropdown.Item>
                    <Dropdown.Item href="/update-profile">Change Password</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
            ) :
            (
            <a href="/user" onClick={handleLogin}>
              <img alt="user img" src={user} width="20px" />
            </a>
            )
            }
          </ul>
        </div>
        {/* <button onClick={() => setIsOpen(true)}>Open Portal</button> */}
        <NavModal open={isOpen} onClose={() => setIsOpen(false)}>
        </NavModal>
      </div>
    </StyledDiv>
  );
};

export default Nav;
