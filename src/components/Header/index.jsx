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
import logo from "../../images/logo.png"

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
                
                <NavItem>
                  <Link to='/atlantic-forest' className='nav-link'><FormattedMessage id="home.atlforestlink" /></Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    ZéCar
              </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem>  <Link to='/zecar' className='nav-link'>About</Link>


                    </DropdownItem>
                    <DropdownItem>
                      <Link to='/kikkerland' className='nav-link'>Kikkerland Design</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link to='/contact' className='nav-link'><FormattedMessage id="home.contactlink" /></Link>
                </NavItem>
              </Nav>
            </Collapse>

          </Navbar>


        </Container>


      </div>
      <Navbar className="langs">
        {!hideLangs && <Langs />}</Navbar>
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
