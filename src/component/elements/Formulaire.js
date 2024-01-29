import React from 'react';
import M from 'materialize-css';
function Form() {
  return (
    <div>

      <div className="row" style={{ marginTop: '100px', margin: 'auto' }}>
        <div className='col s12 ' style={{  }}>

         <div className="col s12 m6" style={{margin: 'auto' }}>
         <form style={{width:'100%'}}>
              <div className="row">
                <div className="input-field col s12">
                  <input id="first_name" type="text" className="validate" />
                  <label for="first_name">Nom</label>
                </div>
                <div className="input-field col s12">
                  <input id="last_name" type="text" className="validate" />
                  <label for="last_name">Prenom</label>
                </div>
              </div>
              <div class="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label for="textarea1">Message</label>
                </div>
              </div>
              <div class="row">
                <div className="input-field col s12 centered">
                  <button className="btn waves-effect waves-light" type="submit" name="action">Envoyer
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
         </div>
            
        
        <div className="col m6">
          <div className="s12 card-panel m2" style={{display: "flex", marginTop: "20px" }}>
              <div className="single__info__box mb-30" style={{ display: "flex", fontSize: "30px" }}>
                <div className="icon">
                  <span className="material-icons" style={{ fontSize: "50px" }}>
                    location_on
                  </span>
                </div>
                <span className="mb-15">414 Rd. New York,</span>
                <span>USA</span>
              </div>
            </div>
            <div className="s12 card-panel " style={{display: "flex", marginTop: "30px" }}>
              <div className="single__info__box mb-30" style={{ display: "flex", fontSize: "30px" }}>
                <div className="icon">
                  <span className="material-icons" style={{ fontSize: "50px" }}>
                    phone
                  </span>
                </div>
                <span className="mb-15">+22789131313  </span>
                <span>  / +22789131313</span>
              </div>
            </div>
            <div className="s12 card-panel " style={{display: "flex", marginTop: "30px" }}>
              <div className="single__info__box mb-30" style={{ display: "flex", fontSize: "30px" }}>
                <div className="icon">
                  <span className="material-icons" style={{ fontSize: "50px" }}>
                    mail_outline
                  </span>
                </div>
                <span className="mb-15">414 Rd. New York,</span>
                <span>USA</span>
              </div>
            </div>
            <div className="s12 card-panel " style={{display: "flex", marginTop: "30px" }}>
              <div className="single__info__box mb-30" style={{ display: "flex", fontSize: "30px" }}>
                <div className="icon">
                  <span className="material-icons" style={{ fontSize: "50px" }}>
                    location_on
                  </span>
                </div>
                <span className="mb-15">414 Rd. New York,</span>
                <span>USA</span>
              </div>
            </div>
        </div>
            
       
        </div>
        <div className='col s12'>
       <div className="maps">
                    <iframe className="" style={{width: '100%' , height: '500px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15515.024560081607!2d2.0957736996380123!3d13.550545590005784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11da9f09763d2ee7%3A0xb57431b273eafb9f!2sNINETEC%20SARL!5e0!3m2!1sfr!2sne!4v1704931514901!5m2!1sfr!2sne" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
       </div>
      </div>
    </div>
  )
}

export default Form
