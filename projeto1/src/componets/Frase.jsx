
import style from './Frase.module.css'
function Frase(){

    return (
        <div className= { style.fraseContainer}>
            <p className={style.fraseContent}>Este é um componente de frase</p>
        </div>
    )
}
export default Frase