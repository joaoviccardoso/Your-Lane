import './index.css'
import Banner from './component/banner'
import Formulario from './component/formulario/formulario'
import Lanes from './lane'
import Rotape from './component/rodape'


const App = () => {
    return(
        <div className='container-geral'>
            <header>
                <Banner/>
            </header>
            <main>
                <Formulario lanes={Lanes.map(lane => lane.nome)}/>
            </main>
            <footer>
                <Rotape/>
            </footer>
        </div>
    )
}

export default App