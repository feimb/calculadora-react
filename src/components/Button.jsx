import "./css components/Button.css"

function Button({ id,simbole }){
    return(
        <input type="button" className="button" id={id} value={simbole} />
    )
}

export default Button 