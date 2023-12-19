import { useState } from "react"
import "./App.css"
import logoimg from "./assets/logo.png"

function App() {
  
  return (
   
     <div className="container">
     <img 
       src={logoimg}
       alt="Logo frases" 
       className="logo"/>
    
    <h2 className="title">Categorias</h2>

    <section className="categoria-area">
      <button className="categoria-button">Motivação</button>
      <button className="categoria-button">Bem-Estar</button>
    </section>

    <button className="buttonfrase">Gerar Frase</button>
    
    <p className="textoFrase">Frases</p>
    
    </div>
    
  

  ) 
  
}

export default App
