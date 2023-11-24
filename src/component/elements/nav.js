import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Logo from '../img/logo2.png'

function Nav() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');

    });    M.AutoInit();
  }, []);

  return (
    <div className='container-fluid header nav'>
      
    <nav className='transparent nav'>
      
    <div className="nav-wrapper">
      <img 
      src={Logo}
      alt='Logo'
      className='logo'
      />
  <Link to="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down right-align">
        <li><Link className='navli transparent' to="/">Accueil</Link></li>
        <li><Link className='navli transparent' to="/apropos">A propos</Link></li>
        <li><Link className='navli transparent' to="/services">Services</Link></li>
        <li><Link className='navli transparent' to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
  <img 
      src={Logo}
      alt='Logo'
      className='logo'
      style={{width: "50%"}}
      />
    <li><Link className='nobnav white-text transparent' to="/">Accueil</Link></li>
    <li><Link className='nobnav white-text transparent' to="/apropos">A propos</Link></li>
    <li><Link className='nobnav white-text transparent' to="/services">Services</Link></li>
    <li><Link className='nobnav white-text transparent' to="/contact">Contact</Link></li>
  </ul>
   
    </div>
   
  );
}

export default Nav;




