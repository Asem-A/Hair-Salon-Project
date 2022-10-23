import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Location from "./Location";
import Contact from "./Contact";
import foto from "./images/foto.png"

class Main extends Component {
  render() {
    return (
      
      <HashRouter>
      <div>
        <img className="pic" src={require('./images/foto.png')}  />
        <h1 id="name">Estetica Unisex Norma</h1>
        <ul className="header">
          <li><NavLink exact to="/">Inicio</NavLink></li>
          <li><NavLink to="/Location">Ubicación</NavLink></li>
          <li><NavLink to="/Contact">Contacto</NavLink></li>
        </ul>

        <div className="content"> 
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/Location" element={ <Location/> }/>
          <Route path="/Contact" element={ <Contact/> }/>
          </Routes>
        </div>
      </div>
      <footer>All Rights Reserved Asem &copy; 2022</footer>
      </HashRouter>
    );
  }
}

export default Main;