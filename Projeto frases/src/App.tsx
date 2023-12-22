import { useState } from "react"
import "./App.css"
import logoimg from "./assets/logo.png"

function App() {

  const [textofrase, settextofrase] = useState("")
  const[categoriaSelecionada, setCategoriaSelecionada]= useState(0)

  const allFrases =[{
    id:1,
    nome:"Motivação",
    frases:[
      'Siga os bons',
      'O bom senso é raro hoje',
      'Nao deixe a sindrome do impostor te afetar'
    ]
  },{
    id:2,
    nome: "Bom dia",
    frases:[
      'acordar cedo é bom',
      'acordar pra vida enquanto a tempo',
      'muitos nao acordam pra vida'
    ]
  }
  ]

  function handleclickcategoria(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarfrase(){
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
      settextofrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
   
     <div className="container">
     <img 
       src={logoimg}
       alt="Logo frases" 
       className="logo"/>
    
    <h2 className="title">Categorias</h2>

    <section className="categoria-area">
      {allFrases.map((item, index) =>(<button key={item.id}className="categoria-button" 
      style={{borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0, borderColor: "#1fa4db"}}
      onClick={() => handleclickcategoria(index)}
      >{item.nome}</button>))}
      
    </section>

    <button className="buttonfrase" onClick={gerarfrase}>Gerar Frase</button>
    
    {textofrase !== '' && <p className="textoFrase">{textofrase}</p>}
    
    </div>
    
  

  ) 
  
}

export default App
