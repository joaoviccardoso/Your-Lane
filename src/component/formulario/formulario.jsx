import './formulario.css'
import Input from '../campoInput'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h3 className='formulario-titulo'>Preencha os dados para criar um card da sua Lane</h3>
                <Input/>
                <Input/>
                <Input/>
            </form>
        </section>
    )
}

export default Formulario