import { useState } from "react"
function Titulo({ cor}){
    const[texto, setTexto] = useState(" titulo  inicial");
    const [inputText, setinputText] = useState ("")
    function clicou( ) {
        setTexto(inputText)
    }
    return (
        <div>
           
        <h1 style={{color : cor}}>{texto}</h1>
        <input value={inputText} onChange={(e) => {setinputText(e.target.value)}} type="" />
        <button onClick={clicou}> Mudar</button>
       </div>
        
        
    ) 

}
export default Titulo