import './index.css'
import SayMyName from "./componets/SayMyName"
import Pessoa from "./componets/Pessoa"
import Frase from './componets/Frase'
import List from './componets/List'

function App() {
   const nome = "Nathan"
  return (
   
  <div>
  <Frase/>
   <SayMyName nome = "Nathan"/>
   <Pessoa 
    foto = "https://via.placeholder.com/150"
    nome = "Nathan"
    idade = "21"
    profissao ="Programador" 
   />
    <Frase/>
    <List/>
  </div>)
}


export default App
