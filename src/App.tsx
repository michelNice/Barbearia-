 import Agendamento from "./components/Agendamento/Agendamento"
import { Navbar } from "./components/Navbar/Navbar"
import Servicos from "./components/Servico/Servicos"
import Sobre from "./components/Sobre/Sobre"
import Contato from "./components/Contato/Contato"
function App() {
  return (
    <>
      <Navbar />
      <Servicos />
      <Agendamento />
      <Sobre />
      <Contato />
    </>
  )
}

export default App
