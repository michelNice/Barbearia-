import { useState } from "react";
import './Navbar.scss'
import { FaCalendarAlt, FaTimes, FaBars } from "react-icons/fa";
import logo from '../../assets/imgs/logo.png'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hero">
      <nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>
        <img src={logo} alt="Barb logo" />

        <ul className={isOpen ? "navbar__menu--open" : ""}>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__toggle"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <a href="/agendamento" className="navbar__booking">
            Agendar horário
          </a>
        </div>
      </nav>

      <div className="hero-text">
        <span className="hero-subtitle">MAIS QUE UM CORTE,</span>
        <h1 className="hero-title">
          É O SEU <span className="highlight">ESTILO.</span>
        </h1>
        <p className="hero-description">
          Cortes, barba, sobrancelha e cuidados completos para você se sentir confiante todos os dias.
        </p>
        <div className="hero-actions">
          <a href="#agendar" className="btn btn-primary">
            <FaCalendarAlt /> Agendar Horário
          </a>
          
          <a href="#servicos" className="btn btn-secondary">
            Conheça os Serviços
          </a>
        </div>
      </div>
    </header>
  );
}