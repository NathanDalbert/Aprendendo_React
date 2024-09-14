function Pessoa({nome, idade, profissao, foto}){
    return(
        <div style= {{ margin: ' auto', width: '12%' }}>
           <img src={foto}/>
           <h2>Nome: {nome}</h2>
           <p>Idade: {idade}</p>
           <p>Profissão: {profissao}</p>

        </div>
    )
}

export default Pessoa