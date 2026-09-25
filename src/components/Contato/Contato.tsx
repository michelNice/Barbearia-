import React, { useState } from 'react';
import './Contato.scss';
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import logo from '../../assets/imgs/logo.png'; // Ajuste o caminho da sua logo

function Contato() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Número real do WhatsApp
  const numeroWhatsApp = '558196887301';
  const urlInstagram = 'https://www.instagram.com/barbeariarodolfoneves/';

  // Máscara aplicando APENAS os parênteses para evitar travamentos ao apagar
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (!input) {
      setTelefone('');
      return;
    }

    let digits = input.replace(/\D/g, '');

    if (digits.length > 11) digits = digits.slice(0, 11);

    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length > 0) {
      formatted = `(${digits}`;
    }

    setTelefone(formatted);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const textoWhatsapp = `Olá! Meu nome é ${nome}.\n\n*Mensagem:* ${mensagem}\n*Contato:* ${telefone}`;
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsapp)}`, '_blank');
  };

  return (
    <footer className="contato-container">
      <div className="contato-content">
        
        {/* Informações de Contato (Esquerda) */}
        <div className="contato-info">
          <h2>CONTATO</h2>
          <p className="subtitle">Estamos prontos para te atender.</p>

          <div className="info-items">
            {/* Item do Telefone / WhatsApp */}
            <a 
              href={`https://wa.me/${numeroWhatsApp}`} 
              target="_blank" 
              rel="noreferrer" 
              className="info-item link-item"
            >
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <strong>(81) 99688-7301</strong>
                <span>WhatsApp</span>
              </div>
            </a>

            {/* Endereço */}
            <div className="info-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <strong>Rua Exemplo, 123</strong>
                <span>Recife - PE</span>
              </div>
            </div>

            {/* Instagram */}
            <a 
              href={urlInstagram} 
              target="_blank" 
              rel="noreferrer" 
              className="info-item link-item"
            >
              <div className="icon-box">
                <FaInstagram />
              </div>
              <div className="info-text">
                <strong>@barbeariarodolfoneves</strong>
              </div>
            </a>
          </div>
        </div>

        {/* Formulário de Mensagem (Direita) */}
        <div className="contato-form-box">
          <form onSubmit={handleSubmit} className="contato-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="(81) 996599779"
                value={telefone}
                onChange={handleTelefoneChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Mensagem"
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-logo">
            <img src={logo} alt="Rodolfo Neves Barbearia" />
          </div>

          <div className="footer-socials">
            <a href={urlInstagram} target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href={`https://wa.me/${numeroWhatsApp}`} target="_blank" rel="noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" title="Facebook">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contato;