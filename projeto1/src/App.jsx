import './index.css'
import Evento from './componets/Evento'
import Form from './componets/Forms'

function App() {
   const nome = "Nathan"
  return (
   
  <div>
  <h1>Testando eventos</h1>
  <Evento numero ={1}/>
  <Evento numero ={2}/>
  <Form/>

  </div>)
}


export default App
