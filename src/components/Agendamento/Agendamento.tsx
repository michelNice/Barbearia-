import React from 'react';
import './Agendamento.scss';
import { FaCalendarAlt, FaUserCheck, FaHome, FaUsers } from 'react-icons/fa';

function Agendamento() {
  const handleAgendarClick = () => {
    const mensagem = 'Olá! Gostaria de agendar um horário na barbearia.';
    const numeroWhatsApp = '5581999999999'; // Substitua pelo seu número
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <section className="agendamento-container">
      <div className="agendamento-content">
        <div className="cta-box">
          <span className="subtitle">SEU HORÁRIO</span>
          <h2>AGENDE AGORA</h2>
          <p>
            Escolha o melhor horário e garanta seu atendimento.<br />
            Rápido, fácil e sem complicação.
          </p>
          <button onClick={handleAgendarClick} className="btn-agendar-dourado">
            <FaCalendarAlt className="icon" /> Agendar Horário
          </button>
        </div>

        <div className="diferenciais-grid">
          <div className="diferencial-item">
            <div className="icon-wrapper">
              <FaUserCheck />
            </div>
            <span>Atendimento personalizado</span>
          </div>

          <div className="diferencial-item">
            <div className="icon-wrapper">
              <FaHome />
            </div>
            <span>Ambiente confortável</span>
          </div>

          <div className="diferencial-item">
            <div className="icon-wrapper">
              <FaUsers />
            </div>
            <span>Profissionais experientes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Agendamento;