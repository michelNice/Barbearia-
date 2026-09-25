import { useState, useEffect } from "react";
import './Navbar.scss';
import { FaCalendarAlt, FaTimes, FaBars } from "react-icons/fa";
import logo from '../../assets/imgs/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ativa o estado sticky após rolar 50px para baixo
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpa o evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="hero">
      <nav 
        className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${isOpen ? "navbar--open" : ""}`}
      >
        <img src={logo} alt="Barb logo" className="navbar__logo" />

        <div
          className={`navbar__overlay ${isOpen ? "navbar__overlay--open" : ""}`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <div className={`navbar__drawer ${isOpen ? "navbar__drawer--open" : ""}`}>
          <div className="navbar__drawer-header">
            <img src={logo} alt="Barb logo" />
          </div>
          <ul className="navbar__drawer-menu">
            <li>
              <a href="#" onClick={() => setIsOpen(false)}>Início</a>
            </li>
            <li>
              <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
            </li>
            <li>
              <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
            </li>
          </ul>
          <a
            href="/agendamento"
            className="navbar__drawer-booking"
            onClick={() => setIsOpen(false)}
          >
            Agendar Horário
          </a>
        </div>

        <ul className="navbar__links">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <div className="navbar__actions">
          <button
            type="button"
            className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span className="navbar__toggle-icon">
              {isOpen ? <FaTimes /> : <FaBars />}
            </span>
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