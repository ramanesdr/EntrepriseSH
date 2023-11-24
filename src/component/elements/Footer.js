import React from 'react'
import Logo from '../img/logo2.png'

function Footer() {
  return (
    <footer class="page-footer" style={{backgroundColor: '#0063db'}}>
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <img src={Logo} className='log2'/>
          <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="orange-text">Contacts</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="#!">Telephone</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Email</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2023 Copyright Entreprise Saley Haougui <a href='https://portfolio-ramanesdr.vercel.app/' target='_blank'>[by ramaneSDR]</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
