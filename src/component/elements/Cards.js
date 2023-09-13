import React from 'react'
import img1 from '../img/i1.jpg'
import img2 from '../img/i2.jpg'
import img3 from '../img/i3.jpg'



function Cards() {
  return (
    <div className='container' style={{paddingTop:"40px", paddingBottom:"40px"}}>

        <div class="row">
    <div class="col s12 m4 crd">
      <div class="card">
        <div class="card-image">
          <img src={img1}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>

    <div class="col s12 m4 crd">
      <div class="card">
        <div class="card-image">
          <img src={img2}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>


    <div class="col s12 m4 crd">
      <div class="card">
        <div class="card-image">
          <img src={img3}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        
      </div>
    </div>


  </div>
  
    </div>
  )
}

export default Cards
