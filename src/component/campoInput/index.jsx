import './input.css'

const Input = (props) => {
    return (
        <div className='campo-input'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default Input