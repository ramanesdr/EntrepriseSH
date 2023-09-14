import React, { useEffect } from 'react';
import img1 from '../img/i1.jpg'
import M from 'materialize-css';
function Serv() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, );
    });    const parallaxElements = document.querySelectorAll('.parallax');
    window.M.Parallax.init(parallaxElements);
  }, []);


  return (
    <div className='container-fluid'>
      <div class="parallax-container" style={{height:"130vh"}}>
      <div class="parallax" ><img src={img1} /></div>
      <div className='paral'>
         <div className=''>
      





      <div class="row">
    <div class="col s12 m6">
      <div class="card orange darken-1">
        <div class="card-content white-text">
          <span class="card-title"> <h1 className="blue-text"><i class="Large material-icons ">apartment</i>Bâtiment</h1></span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>

    <div class="col s12 m6">
      <div class="card orange darken-1">
        <div class="card-content white-text">
          <span class="card-title"> <h1 className="blue-text"><i class="Large material-icons ">add_road</i>Route</h1></span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>

    <div class="col s12 m6">
      <div class="card orange darken-1">
        <div class="card-content white-text">
          <span class="card-title"> <h1 className="blue-text"><i class="Large material-icons ">water_drop</i>Hydraulique</h1></span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>

    <div class="col s12 m6">
      <div class="card orange darken-1">
        <div class="card-content white-text">
          <span class="card-title"> <h1 className="blue-text"><i class="Large material-icons ">front_loader</i>Location des engins</h1></span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>
  </div>
         </div>
      


      </div>
    </div>
    </div>
  )
}

export default Serv
