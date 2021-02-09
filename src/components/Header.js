import React from 'react'; 
import '../style/header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {

    {

        return (<div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <div style={{ padding: 5}}>
                        <NavLink 
                        to="/" 
                        className='headerFont'
                        // activeClassName='selected' activeStyle={{ color: '#fdbc00', fontFamily: 'Raleway'}}
                        >Home</NavLink>

                        </div>
                        <div style={{ padding: 5}}>
                        <NavLink 

                            to="/aboutme" 
                            className='headerFont'
                            >About</NavLink>

                        </div>

                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            
                </div>

            )
        }

} 
   
export default Header;