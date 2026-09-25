import './Servicos.scss';
import { FaCut } from 'react-icons/fa'; 
import img from '../../assets/imgs/img.jpg'
import img1 from '../../assets/imgs/img1.jpg'
import img2 from '../../assets/imgs/img2.png'
import img3 from '../../assets/imgs/img3.png'
import img4 from '../../assets/imgs/img4.png'
interface Servico {
  id: number;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
}

function Servicos() {
  const servicos: Servico[] = [
    {
      id: 1,
      nome: "Corte Masculino",
      preco: "A partir de R$ 40",
      descricao: "Cortes modernos e clássicos, do seu jeito.",
      imagem: img
    },
    {
      id: 2,
      nome: "Barba",
      preco: "A partir de R$ 30",
      descricao: "Modelagem e alinhamento com precisão.",
      imagem: img2
    },
    {
      id: 3,
      nome: "Sobrancelha",
      preco: "A partir de R$ 20",
      descricao: "Design para um olhar mais marcante.",
      imagem:img1,
    },
    {
      id: 4,
      nome: "Pigmentação",
      preco: "A partir de R$ 60",
      descricao: "Mais definição e aparência de barba cheia.",
      imagem:img3,
    },
    {
      id: 5,
      nome: "Tratamentos",
      preco: "A partir de R$ 50",
      descricao: "Hidratação e cuidados para o seu cabelo e barba.",
      imagem:img4,
    },
  ];

  return (
    <section className="servicos-container">
      <header className="servicos-header">
        <span className="subtitle">
          <FaCut className="icon" /> NOSSOS SERVIÇOS
        </span>
        <h2>SERVIÇOS DE ALTO NÍVEL</h2>
        <p>
          Cada detalhe importa. Nossos serviços são pensados para realçar o seu estilo e cuidar da sua imagem.
        </p>
      </header>

      <div className="servicos-grid">
        {servicos.map((servico) => (
          <div key={servico.id} className="servico-card">
            <div className="card-image-wrapper">
              <img src={servico.imagem} alt={servico.nome} />
            </div>
            <div className="card-content">
              <h3>{servico.nome}</h3>
              <span className="preco">{servico.preco}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicos;