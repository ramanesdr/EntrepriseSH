import React, { useEffect } from 'react';
import Logo from '../img/logo2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import M from 'materialize-css';

function Footer() {
  useEffect(() => {

    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems);

  }, []);

  return (
    <footer className="page-footer" style={{ backgroundColor: '#0063db'}}>
      <div className="">
        <div className="row">
          <div className="col l4 s12" style={{textAlign: 'center'}} >
            <img src={Logo} className='log2' style={{ width: '100px'}} />
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 center offset s12" style={{marginTop:'50px'}}>
            <h5 className="orange-text">Contacts</h5>
            <ul  style={{display: 'flex', justifyContent: 'space-between', width:'50%' ,margin: 'auto'}}>
              <li><a className="grey-text text-lighten-3" href="#!">
                <span className="material-icons">
                  call
                </span>
              </a>
              </li>
              <li><a className="grey-text text-lighten-3" href="#!">
              <FontAwesomeIcon style={{fontSize: '25px'}} icon={faWhatsapp} />
              </a>
              </li>
              <li><a className="grey-text text-lighten-3" href="#!">
                <span className="material-icons">
                  mail
                </span>
              </a></li>
              <li><a className="grey-text text-lighten-3" href="#!">
                <span className="material-icons">
                  facebook
                </span>
              </a></li>
            </ul>
          </div>
          <div className="col l4 center  s12" style={{marginTop:'50px'}}>
          <h5 className="orange-text">Pages</h5>


            <ul className='orange-text' style={{display: 'flex', justifyContent: 'space-between', width:'50%' ,margin: 'auto'}}>
              <li><a className="white-text" href="/">Acceuil</a></li>
              <li><a className="white-text" href="/Apropos">A propos</a></li>
              <li><a className="white-text" href="/Services">Services</a></li>
              <li><a className="white-text" href="/Contact">Contact</a></li>
            </ul>
          </div>

        </div>
      </div>
      <hr></hr>
      <div className="footer-copyright" >
        <div className="container" style={{textAlign: 'center'}}>
          © 2023 Copyright Entreprise Saley Haougui <a href='https://portfolio-ramanesdr.vercel.app/' target='_blank'>[by ramaneSDR]</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
