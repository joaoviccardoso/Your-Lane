import './listaSuspensa.css'

const ListaSuspensa = (props) =>{
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select>
                <option value="">Selecione uma opção</option>
                {props.lanes.map(lane => {
                    return <option key={lane}>{lane}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa