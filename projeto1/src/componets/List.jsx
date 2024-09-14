import Item from "./Item"
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul >
                <Item marca = "Ferarri"/>
                <Item marca = "Renault"/>
                <Item marca = "Fiat"/>
            </ul>
        </>
    )
}
export default List