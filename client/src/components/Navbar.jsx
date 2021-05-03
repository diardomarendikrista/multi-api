import React from 'react'
import { useHistory } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar () {
  const history = useHistory();

  const goToHome = (event) => {
    event.preventDefault();
    history.push(`/`)
  }

  return (
    <nav className="navbar navbar-light">
      <a onClick={(event) => goToHome(event)} className="navbar-brand" href="/#">
          <img className="navbar-logo" src={logo} alt="logo"/>
      </a>
    </nav>
  )
}