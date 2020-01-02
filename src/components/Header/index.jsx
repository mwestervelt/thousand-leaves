import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { FormattedMessage } from 'react-intl';
import Langs from '../Langs';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import logo from "../../images/logo.png"

const Header = ({ hideLangs }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
      <div >
        <Navbar className='mx-auto' color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand className='mx-auto'>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage id="home.projlink" />
                </DropdownToggle>
                <DropdownMenu left="true">
                  <DropdownItem>
                    <Link to='/the-project' className='nav-link'>About</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/people' className='nav-link'><FormattedMessage id="home.peoplelink" /></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/trees' className='nav-link'><FormattedMessage id="home.treeslink" /></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage id="home.reforestlink" />
                </DropdownToggle>
                <DropdownMenu left="true">
                  <DropdownItem>
                    <Link to='/reforestation' className='nav-link'><FormattedMessage id="home.manuallink" /></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/tools' className='nav-link'><FormattedMessage id="home.toolslink" /></Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to='/saplings' className='nav-link'><FormattedMessage id="home.saplingslink" /></Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to='/atlantic-forest' className='nav-link'><FormattedMessage id="home.atlforestlink" /></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ZéCar
                  </DropdownToggle>
                <DropdownMenu left="true">
                  <DropdownItem>
                    <Link to='/zecar' className='nav-link'>About</Link>
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
            <span className="ml-auto langs">
              {!hideLangs && <Langs />}
              </span>
          </Collapse>
        </Navbar>
        <Navbar className='mx-auto' color="light" light expand="md">
          <NavbarBrand className='mx-auto myLogo'>
            <Link to='/' className='img-fluid'><img className="logo" src={logo} alt="logo" /></Link>
          </NavbarBrand>
        </Navbar>
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

