import React from 'react'
import aids from '../img/ACSI.jpg'
import maas from '../img/maas.jpeg'
import jjif from '../img/jjif.png'
import jjafu from '../img/jjafu.jpeg'

function Part() {
  return (
    <div className='container text-center mt-5'>
        <h1 className='text-danger'>Reconue par</h1>
      <div className='row mt-5'>
        <div className='col'>
            <img 
            className='part'
            src={maas}
            />
        </div>
        <div className='col'>
            <img 
            className='part'
            src={jjif}
            />
        </div>
        <div className='col'>
            <img 
            className='part'
            src={jjafu}
            />
        </div>
        <div className='col'>
            <img 
            className='part'
            src={aids}
            />
        </div>
      </div>
      <div className="wrapper">
	<svg id='svg'>
		<text x="50%" y="50%" dy="50%" text-anchor="middle">
			FENIJUTSU
		</text>
	</svg>
  
</div>
<h1 className='feder'>
Federation Nigerienne de Ju jitsu
  </h1>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus, ipsum at pellentesque dignissim, metus risus suscipit dui, in interdum diam urna id quam. Suspendisse nec rhoncus quam. Nullam feugiat faucibus ante ut tristique. In condimentum convallis tristique. Vivamus aliquet ac enim eget commodo. Vestibulum vitae tellus imperdiet, porta odio non, gravida nibh. Nulla facilisi. Etiam tempus tortor in ipsum sodales, sed tristique tortor ornare. Duis venenatis turpis in sem dignissim eleifend. Morbi lobortis eu elit id molestie. Vivamus iaculis sagittis ligula et egestas.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in dui feugiat, ultrices lorem in, sollicitudin mauris. Aliquam bibendum enim quis rhoncus congue. Integer vitae rutrum odio. Mauris dui tellus, gravida quis gravida ullamcorper, consequat pellentesque nunc. Phasellus fringilla tempus nisi, a placerat eros aliquet non. Vivamus nec quam tincidunt, facilisis libero id, venenatis justo. Sed sed fermentum dolor, tincidunt porta ligula. Morbi porta quam lorem, nec mattis nibh pulvinar ac. Sed ligula justo, iaculis sed volutpat vitae, fermentum eu magna. Etiam dolor ante, tincidunt in felis ut, efficitur sollicitudin ex. Aliquam consectetur, odio non mattis dignissim, felis felis ultricies diam, a tincidunt magna mauris consequat leo. Curabitur maximus congue suscipit.

Ut id dui at urna dictum dapibus et molestie magna. Phasellus ultricies lectus in dictum semper. Maecenas consequat odio eget dapibus congue. Pellentesque faucibus, est sed vehicula semper, erat sem bibendum nibh, sit amet semper elit libero id sapien. Integer lobortis, urna ac rhoncus dapibus, augue ante condimentum nunc, non vehicula eros sem vel orci. Suspendisse eu enim ut augue tincidunt tempus sed eget erat. Suspendisse potenti. Ut ut fringilla dolor.
  </p>
    </div>
  )
}

export default Part
