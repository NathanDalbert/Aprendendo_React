
import SayMyName from "./componets/SayMyName"
import Pessoa from "./componets/Pessoa"

function App() {
   const nome = "Nathan"
  return (
   
  <div>
  
   <SayMyName nome = "Nathan"/>
   <Pessoa 
    foto = "https://via.placeholder.com/150"
    nome = "Nathan"
    idade = "21"
    profissao ="Programador" 
   />
  </div>)
}


export default App
