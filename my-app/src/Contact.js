import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Tienes alguna duda o requieres agendar una cita? Contáctame</h2>
        
          <h3><img className="wha" src={require('./images/whatsapp.png')}  /> +52 8611281333</h3>
          <a href="https://www.facebook.com/profile.php?id=100008247010925" target={'_blank'}>
            <img className="fb" src={require('./images/facebook.png')}  />
            </a>
            
        
      </div>
    );
  }
}
 
export default Contact;