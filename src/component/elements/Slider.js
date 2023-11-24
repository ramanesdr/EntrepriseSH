import React, { useEffect } from 'react';
import img1 from '../img/i1.jpg'
import img2 from '../img/i2.jpg'
import img3 from '../img/i3.jpg'




function MaterializeSlider() {
  useEffect(() => {
    // Initialisez le slider Materialize CSS
    const slider = document.querySelectorAll('.slider');
    window.M.Slider.init(slider, {
      indicators: false, // Afficher les indicateurs de diapositives
      height: 600, // Hauteur du slider
    });
  }, []);

  return (
    <div className='container-fluid'>
      <div className="slider">
      <ul className="slides">
        <li>
          <img src={img1} alt="Image 1" className='responsive-img' />
          <div className="caption center-align">
            <h1 className='blue-text sl'>Image 1</h1>
            <h3 className='deep-orange-text darken-2'>Description de l'image 1</h3>
          </div>
        </li>
        <li>
          <img src={img2} alt="Image 2" />
          <div className="caption left-align">
            <h1 className='blue-text sl'>Image 2</h1>
            <h3 className='deep-orange-text darken-2'>Description de l'image 2</h3>
          </div>
        </li>
        <li>
          <img src={img3} alt="Image 3" />
          <div className="caption right-align">
            <h1 className='blue-text sl'>Image 3</h1>
            <h3 className='deep-orange-text darken-2'>Description de l'image 3</h3>
          </div>
        </li>
      </ul>
    </div>
    </div>
    
  );
}

export default MaterializeSlider;
