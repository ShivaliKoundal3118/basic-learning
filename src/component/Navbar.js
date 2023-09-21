import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { Switch, Route,BrowserRouter, Router } from 'react-router-dom';
import About from './About'
import Home from './Home'
import Contact from './Contact'
export default class NavbarComp extends Component{
    render(){
return(
    <>
     
       
    <div>
    <Navbar bg="dark" variant={"dark    "} expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        
        <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#contact">Contact </Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form  class="form-inline" >
    
    <FormControl class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        
      </Form>
    </Navbar.Collapse>
  </Navbar>
      </div>
      
           </> 
)
    }
}