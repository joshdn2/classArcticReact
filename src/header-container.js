import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.scss';

function HeaderContainer(props){
    return(
        <bs.Navbar variant="dark" expand="lg">
            <Link to='/'>
                <bs.Navbar.Brand className="remtimes2">
                    <i className="fas fa-kiwi-bird pr-2" style={{fontSize:"2rem", color:"#f2f2f2"}}></i>
                    &nbsp;Arctic Kiwi&nbsp;
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to='/' className="nav-link" style={{color:"#f2f2f2"}}>Home&nbsp;&nbsp;</Link>
                    <Link to='/about' className="nav-link" style={{color:"#f2f2f2"}}>About&nbsp;&nbsp;</Link>
                    <Link to='/help' className="nav-link" style={{color:"#f2f2f2"}}>Help&nbsp;</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.NavDropdown title="Welcome, User" style={{color:"#f2f2f2"}} alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item>Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default HeaderContainer