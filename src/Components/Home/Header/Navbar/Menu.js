import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar className="h5" bg="light" expand="lg">
      <Navbar.Brand style={{ fontSize: "2.25rem" }} href="#home">
        <span style={{ color: "red" }}>R</span>epairer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-dark">
          <Link className="mr-5" to="#home">
            Home
          </Link>
          <Link className="mr-5" to="/home">
            Services
          </Link>
          <Link className="mr-5" to="/projects">
            Projects
          </Link>
          <Link className="mr-5" to="/dashboard/id">
            Dashboard
          </Link>
          <Link className="mr-5" to="/login">
            Login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
