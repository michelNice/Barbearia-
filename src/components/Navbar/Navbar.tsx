import { useState } from "react";
import './Navbar.scss'
import logo from '../../assets/imgs/logo.png'
export  function Navbar(){
    return(
        <header>
                <nav className="navbar">
                    <img src={logo} alt="Barb logo" />
                    <ul>
                         <li>
                             <a href="#">Início</a>
                         </li>
                         <li>
                             <a href="#"> Serviços</a>
                         </li>
                         <li>
                             <a href="#"> Sobre</a>
                         </li>
                         <li>
                             <a href="#"> Galeria</a>
                         </li>
                    </ul>
                    <a href="/agendamento" className="navbar__booking">
                         Agendar horário
                     </a>
                </nav>
        </header>
    )
}