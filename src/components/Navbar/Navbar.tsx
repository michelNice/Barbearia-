import { useState, useEffect, type MouseEvent } from "react";
import './Navbar.scss';
import { FaCalendarAlt, FaTimes, FaBars } from "react-icons/fa";
import logo from '../../assets/imgs/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função aprimorada para realizar a rolagem suave no React
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Fecha o menu drawer no mobile

    // Caso o destino seja o topo (Início)
    if (targetId === "inicio" || targetId === "" || targetId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      // Método principal: scrollIntoView
      element.scrollIntoView({ behavior: "smooth", block: "start" });

      // Fallback: se o scrollIntoView falhar ou a Navbar for fixa, calcula o offset manual
      const yOffset = -80; // Ajuste este valor se a sua Navbar cobrir o título da seção
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(
        `[Navbar Error] Não foi encontrado nenhum elemento na página com o id="${targetId}". ` +
        `Certifique-se de adicionar id="${targetId}" na tag <section> do componente correspondente.`
      );
    }
  };

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

        {/* Menu Mobile / Drawer */}
        <div className={`navbar__drawer ${isOpen ? "navbar__drawer--open" : ""}`}>
          <div className="navbar__drawer-header">
            <img src={logo} alt="Barb logo" />
          </div>
          <ul className="navbar__drawer-menu">
            <li>
              <a href="#" onClick={(e) => handleNavClick(e, "inicio")}>Início</a>
            </li>
            <li>
              <a href="#servicos" onClick={(e) => handleNavClick(e, "servicos")}>Serviços</a>
            </li>
            <li>
              <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>Sobre</a>
            </li>
            <li>
              <a href="#contato" onClick={(e) => handleNavClick(e, "contato")}>Contato</a>
            </li>
          </ul>
          <a
            href="#agendamento"
            className="navbar__drawer-booking"
            onClick={(e) => handleNavClick(e, "agendamento")}
          >
            Agendar Horário
          </a>
        </div>

        {/* Links do Desktop */}
        <ul className="navbar__links">
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, "inicio")}>Início</a>
          </li>
          <li>
            <a href="#servicos" onClick={(e) => handleNavClick(e, "servicos")}>Serviços</a>
          </li>
          <li>
            <a href="#sobre" onClick={(e) => handleNavClick(e, "sobre")}>Sobre</a>
          </li>
          <li>
            <a href="#contato" onClick={(e) => handleNavClick(e, "contato")}>Contato</a>
          </li>
        </ul>

        {/* Ações da Navbar */}
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
          <a 
            href="#agendamento" 
            className="navbar__booking"
            onClick={(e) => handleNavClick(e, "agendamento")}
          >
            Agendar horário
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-text">
        <span className="hero-subtitle">MAIS QUE UM CORTE,</span>
        <h1 className="hero-title">
          É O SEU <span className="highlight">ESTILO.</span>
        </h1>
        <p className="hero-description">
          Cortes, barba, sobrancelha e cuidados completos para você se sentir confiante todos os dias.
        </p>
        <div className="hero-actions">
          <a 
            href="#agendamento" 
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, "agendamento")}
          >
            <FaCalendarAlt /> Agendar Horário
          </a>
          
          <a 
            href="#servicos" 
            className="btn btn-secondary"
            onClick={(e) => handleNavClick(e, "servicos")}
          >
            Conheça os Serviços
          </a>
        </div>
      </div>
    </header>
  );
}