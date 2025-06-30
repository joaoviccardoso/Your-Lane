import './botao.css'

const Botao = (props) => {
    return(
        <div className='container-botao'>
            <button type='submit'>{props.children}</button>
        </div>
    )
}

export default Botao