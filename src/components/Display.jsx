import "./css components/Display.css"

function Display(){
    return(
        <div className="display">
            <input type="text" id="secondNumber" readOnly/>
            <input type="text" id="firstNumber" readOnly/>
        </div>
    )
}

export default Display