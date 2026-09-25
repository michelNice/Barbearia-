import React, { useState } from 'react';
import './Agendamento.scss';
import { FaUserCheck, FaHome, FaUsers, FaWhatsapp, FaClock } from 'react-icons/fa';

function Agendamento() {
  const [servico, setServico] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');

  // Validação de Data (Apenas Terça a Sábado)
  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dataSelecionada = e.target.value;
    if (!dataSelecionada) return;

    const [ano, mes, dia] = dataSelecionada.split('-').map(Number);
    const dateObj = new Date(ano, mes - 1, dia);
    const diaDaSemana = dateObj.getDay(); // 0: Domingo, 1: Segunda, ..., 6: Sábado

    if (diaDaSemana === 0 || diaDaSemana === 1) {
      setErro('Atendimento de Terça a Sábado. Escolha outra data.');
      setData('');
    } else {
      setErro('');
      setData(dataSelecionada);
    }
  };

  // Validação de Horário (Apenas 09:00 às 18:00)
  const handleHorarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const horaSelecionada = e.target.value;
    if (!horaSelecionada) return;

    const [horas] = horaSelecionada.split(':').map(Number);

    if (horas < 9 || horas >= 18) {
      setErro('Horário de atendimento: 09:00 às 18:00.');
      setHorario('');
    } else {
      setErro('');
      setHorario(horaSelecionada);
    }
  };

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data || !horario) {
      setErro('Selecione uma data e horário válidos.');
      return;
    }

    const [ano, mes, dia] = data.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    const mensagem = `Olá! Gostaria de agendar um horário:\n\n- *Serviço:* ${servico}\n- *Data:* ${dataFormatada}\n- *Horário:* ${horario}\n- *Cliente:* ${nome}\n- *Contato:* ${telefone}`;

    const numeroWhatsApp = '5581999999999'; // Substitua pelo seu número
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
  };

  return (
    <section className="agendamento-container">
      <div className="agendamento-content">
        
        {/* Formulário de Agendamento (Esquerda) */}
        <div className="form-box">
          <span className="subtitle">SEU HORÁRIO</span>
          <h2>AGENDE AGORA</h2>
          <p className="atendimento-badge">
            <FaClock /> Terça a Sábado, das 09:00 às 18:00
          </p>

          <form onSubmit={handleAgendar} className="agendamento-form">
            {erro && <div className="mensagem-erro">{erro}</div>}

            <div className="form-group">
              <label>Serviço Desejado</label>
              <select value={servico} onChange={(e) => setServico(e.target.value)} required>
                <option value="">Selecione um serviço</option>
                <option value="Corte Masculino">Corte Masculino - R$ 40</option>
                <option value="Barba">Barba - R$ 30</option>
                <option value="Sobrancelha">Sobrancelha - R$ 20</option>
                <option value="Pigmentação">Pigmentação - R$ 60</option>
                <option value="Tratamentos">Tratamentos - R$ 50</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Data</label>
                <input 
                  type="date" 
                  value={data} 
                  onChange={handleDataChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Horário</label>
                <input 
                  type="time" 
                  value={horario} 
                  min="09:00"
                  max="18:00"
                  onChange={handleHorarioChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Seu Nome</label>
                <input 
                  type="text" 
                  placeholder="Nome completo" 
                  value={nome} 
                  onChange={(e) => setNome(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Seu WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(81) 99999-9999" 
                  value={telefone} 
                  onChange={(e) => setTelefone(e.target.value)} 
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn-agendar-submit">
              <FaWhatsapp className="icon-whatsapp" /> CONFIRMAR VIA WHATSAPP
            </button>
          </form>
        </div>

        {/* Ícones com Diferenciais (Direita) */}
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