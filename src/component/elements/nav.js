import React, { useEffect } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg'

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
      <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
      <ul className="right hide-on-med-and-down">
        <li><Link className='navli transparent' to="/">Acceuil</Link></li>
        <li><Link className='navli transparent' to="/">A propos</Link></li>
        <li><Link className='navli transparent' to="/">Services</Link></li>
        <li><Link className='navli transparent' to="/">Contact</Link></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
  <img 
      src={Logo}
      alt='Logo'
      className='logo'
      style={{width: "100%"}}
      />
    <li><Link className='nobnav white-text transparent' to="/">Acceuil</Link></li>
    <li><Link className='nobnav white-text transparent' to="/">A propos</Link></li>
    <li><Link className='nobnav white-text transparent' to="/">Services</Link></li>
    <li><Link className='nobnav white-text transparent' to="/">Contact</Link></li>
  </ul>
   
    </div>
   
  );
}

export default Nav;




