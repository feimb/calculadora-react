import { useState } from 'react'
import NumberPad  from "./components/NumberPad";
import Display from './components/Display';
import './App.css'

function App() {
  

  return (
    <>
      <form action="">
        <div className="calculadora">
          <Display />

          <NumberPad />
        </div>
      </form>
    </>
  )
}

export default App
