import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
import Langs from '../Langs';
import { Container } from 'reactstrap'
import logo from "../../images/logo.png" // Tell Webpack this JS file uses this image

const Header = ({ siteTitle, hideLangs }) => (
   
<>
   <div className='navbar navbar-expand-lg navbar-light bg-light'>
   <Container>
     <ul className='nav navbar-nav mx-auto'>
       <li className='nav-item'>
         <Link to='/about' className='nav-link'>The Project</Link>
       </li>
       <li className='nav-item'>
         <Link to='/reforestation' className='nav-link'>Reforestation</Link>
       </li>
       <li className='nav-item'>
         <Link to='/zecar' className='nav-link'>Zécar</Link>
       </li>
       <li className='nav-item'>
         <Link to='/atlantic-forest' className='nav-link'>Atlantic Forest</Link>
       </li> 
       <li className='nav-item'>
         <Link to='/contact' className='nav-link'>Contact</Link>
       </li>
     </ul>
     {!hideLangs && <Langs />}
   </Container>
  
 </div>
 <div className='navbar navbar-expand-lg navbar-light bg-light'>
 <Link to='/' className='navbar-brand mx-auto'><img className="logo" src={logo} alt="logo"></img></Link>


   </div>
   </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  hideLangs: PropTypes.bool,
};

Header.defaultProps = {
  siteTitle: ``,
  hideLangs: false,
};

export default Header;
