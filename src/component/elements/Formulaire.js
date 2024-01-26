import React from 'react';
import M from 'materialize-css';
function Form() {
  return (
    <div>

      <div className="row" style={{ marginTop: '100px' }}>
        <div className='col s12 m6'>
          <div className='row'>
            <div className="s12" style={{marginLeft: "50px" , display: "flex"}}>
              <div className="single__info__box mb-30">
                <div className="icon">
                  <span className="material-icons">
                    location_on
                  </span>
                </div>
                <span className="mb-15">414 Rd. New York,</span>
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>
        <form className="col s12 m6">
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
    </div>
  )
}

export default Form
