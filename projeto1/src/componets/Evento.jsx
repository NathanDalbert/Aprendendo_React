function Evento({numero}){

    function meuEvento(){
    console.log( `Ativado com sucesso ${numero}`)
    }
    return(
        <div>
            <p>
                clique para disparar evento: 
            </p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento