import "./css components/NumberPad.css"
import Button from "./Button"
function NumberPad(){
    return(
        <div className="buttons">
            <Button simbole="("/>
            <Button simbole=")"/>
            <Button id="delete" simbole="C"/>

            <Button simbole="7"/>
            <Button simbole="8"/>
            <Button simbole="9"/>
            <Button simbole="*"/>
            
            <Button simbole="6"/>
            <Button simbole="5"/>
            <Button simbole="4"/>
            <Button simbole="/"/>

            <Button simbole="3"/>
            <Button simbole="2"/>
            <Button simbole="1"/>
            <Button simbole="-"/>

            <Button simbole="0"/>
            <Button simbole="."/>
            <Button simbole="="/>
            <Button simbole="+"/>
    
        </div>
    )
}

export default NumberPad 