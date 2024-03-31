import { useState } from 'react'

import './App.css'

function App() {
  

  return (
    <>
      <form action="">
        <div className="calculadora">
          <div className="display">
            <p id="secondNumber">
              24
            </p>
            <div id="firstNumber">
              123
            </div>
          </div>
          <div className="buttons">
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" id='delete' value={"C"} />
            
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" />
            
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" />
            <input type="button" className="button" />
          </div>
        </div>
      </form>
    </>
  )
}

export default App
