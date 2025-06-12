import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
//Numeros del contador
let num1 = 0
let num2 = 0
let num3 = 0
let num4 =0
//Logica del funcionamiento
setInterval(function(){
    num1++;
    if (num1 === 10) {
      num1 = 0;
      num2++;
      if (num2 === 10) {
        num2 = 0;
        num3++;
        if (num3 === 10) {
          num3 = 0;
          num4++;
          if (num4 === 10) {
            num4 = 0;
          }
        }
      }
    }
      ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home numero1={num1} numero2={num2} numero3={num3} numero4={num4}/>
  </React.StrictMode>,
)
}, 1000)
