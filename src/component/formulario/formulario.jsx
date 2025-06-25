import './formulario.css'
import Input from '../campoInput'
import ListaSuspensa from '../listaSuspensa'

const Formulario = (props) => {
    return (
        <section className='formulario'>
            <form>
                <h3 className='formulario-titulo'>Preencha os dados para criar um card da sua Lane</h3>
                <Input
                    label="Nome"
                    placeholder="Digite o nome do jogador"
                />
                <Input
                    label="Campeão Favorito"
                    placeholder="Digite o nome do Campeão"
                />
                <Input
                    label="Imagem"
                    placeholder="Digite a url de uma imagem de seu campeão"
                />
                <ListaSuspensa
                    label="Escolha sua Lane"
                    lanes={props.lanes}
                />
            </form>
        </section>
    )
}

export default Formulario