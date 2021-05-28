import React, { useContext } from "react";
import './Menu.css'
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../../../App";
import firebase from "firebase/app";
import "firebase/auth";




const Menu = () => {

  const [userInfo , setUserInfo] = useContext(userContext)

  
 const handleSignOut =()=>{
  firebase.auth().signOut().then(() => {
    setUserInfo({})
  }).catch((error) => {
    // An error happened.
  });
  
  
 }

  return (
    <Navbar className="h5" bg="light" expand="lg">
      <Navbar.Brand style={{ fontSize: "2.25rem" }} href="#home">
        <span style={{ color: "red" }}>R</span>epairer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-dark">
          <Link className="mr-5" to="#home">
           <span className="menu-item"> Home</span>
          </Link>
          <Link className="mr-5" to="/home">
           <span  className="menu-item"> Services</span>
          </Link>
          <Link className="mr-5" to="/projects">
            <span  className="menu-item">Projects</span>
          </Link>
          <Link className="mr-5" to="/dashboard/id">
           <span  className="menu-item">Dashboard</span> 
          </Link>
        {!userInfo.email &&  <Link className="mr-5" to="/login">
          <span  className="menu-item">Login</span> </Link> }

          {userInfo.email &&  <span  className="menu-item mr-5 mb-5" onClick={handleSignOut} >
            Logout
          </span>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
