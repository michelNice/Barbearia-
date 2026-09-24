import { useState } from "react";
import './Navbar.scss'
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
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>

          <a href="/agendamento" className="navbar__booking">
            Agendar horário
          </a>
        </div>
      </nav>
    </header>
  );
}