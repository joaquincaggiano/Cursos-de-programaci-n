import React, {Component} from 'react';
//Para que se ejecute con éxito la asincronía del llamado a la API, se usa arrow function
const NavBar = ({mostrarRandomGif})=> { //Se trae el método a ejecutar en onClick
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          GIPHY APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="nav ml-auto">
          <li className="nav-item">
            {/* El llamado al método se hace con arrow function y ejecutando la función */}
            <button onClick={() => mostrarRandomGif()} className="btn btn-success">Cargar random</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;
