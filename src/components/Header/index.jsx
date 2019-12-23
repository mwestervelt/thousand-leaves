import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import { FormattedMessage } from 'react-intl';
import Langs from '../Langs';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
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
                {/* <NavItem>
                  <Link to='/the-project' className='nav-link'><FormattedMessage id="home.projlink" /></Link>
                </NavItem> */}
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
