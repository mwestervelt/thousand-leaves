import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { FormattedMessage } from 'react-intl';
import Langs from '../Langs';
import {
  Container,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import logo from "../../images/logo.png" // Tell Webpack this JS file uses this image

const Header = ({ siteTitle, hideLangs }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <Container>
          <Navbar className='mx-auto' color="light" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to='/the-project' className='nav-link'><FormattedMessage id="home.projlink" /></Link>
                </NavItem>
                <NavItem>
                  <Link to='/reforestation' className='nav-link'><FormattedMessage id="home.reforestlink" /></Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    ZéCar
              </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>
                      About
                </DropdownItem>
                    <DropdownItem>
                      Kikkerland Design
                </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link to='/atlantic-forest' className='nav-link'><FormattedMessage id="home.atlforestlink" /></Link>
                </NavItem>
                <NavItem>
                  <Link to='/contact' className='nav-link'><FormattedMessage id="home.contactlink" /></Link>
                </NavItem>
              </Nav>
            </Collapse>
           
          </Navbar>
       
      {!hideLangs && <Langs />}
          
        </Container>
     
      </div>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand mx-auto'><img className="logo" src={logo} alt="logo"></img></Link>
      </div>
    </>)
}
  ;

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
