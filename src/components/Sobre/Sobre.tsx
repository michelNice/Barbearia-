import './Sobre.scss';
import { GiRazor } from 'react-icons/gi'; 
import owner from '../../assets/imgs/SaveClip.App_620409356_18559715248055363_7642366684023286410_n.jpg';
function Sobre() {
  return (
    <section className="sobre-container">
      <div className="sobre-content">
        <div className="sobre-imagem">
          <img src={owner} alt="Rodolfo Neves Barbearia" />
        </div>
        <div className="sobre-texto">
          <div className="titulo-box">
            <GiRazor className="icon-destaque" />
            <h2>RODOLFO NEVES BARBEARIA</h2>
          </div>
          <p className="destaque">
            Somos mais que uma barbearia. Somos um espaço de confiança, estilo e atitude.
          </p>
          <p className="descricao">
            Desde o início, nosso objetivo é oferecer muito mais do que cortes, mas sim uma experiência completa, com profissionais qualificados, ambiente acolhedor e atendimento de qualidade.
          </p>
          <span className="missao-dourada">
            Aqui, o seu estilo é a nossa missão.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Sobre;