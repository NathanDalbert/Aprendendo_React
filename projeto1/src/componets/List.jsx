import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul >
                <Item marca = "Ferarri"ano_lancamento = {1985}/>
                <Item marca = "Renault" ano_lancamento = {2000}/>
                <Item marca = "Fiat" ano_lancamento = {1998}/>
                <Item/>
            </ul>
        </>
    )
}
export default List