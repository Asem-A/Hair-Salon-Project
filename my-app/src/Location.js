import React, { Component } from "react";

 
class Location extends Component {
  render() {
    return (
      <div>
        <h2>Location</h2>
        <p>Te esperamos en nuestra ubicación:</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1762.4154994361995!2d-101.22018938141237!3d27.937825782826224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868adb0abb740df1%3A0xf056ca32176d9f25!2sEstetica%20Unisex%20Norma!5e0!3m2!1sen!2ssa!4v1666390849759!5m2!1sen!2ssa" width="300" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    );
  }
}
 
export default Location;