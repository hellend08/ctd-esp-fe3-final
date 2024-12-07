import React from 'react'
import { Link } from "react-router-dom"
import { useCardStates } from '../Context/Context';

const Navbar = () => {

  const { state, dispatch } = useCardStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <Link to="/home">
        <h4>Inicio</h4>
      </Link>
      <Link to="/contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/detail/id">
        <h4>Detalle del Dentista</h4>
      </Link>
      <Link to="/favs">
        <h4>Destacados</h4>
      </Link>

      <button className="button-theme" onClick={toggleTheme}>Cambiar a {state.theme === "light" ? "🌚" : "🌞"}</button>
    </nav>
  )
}

export default Navbar