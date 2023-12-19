import { useState } from 'react'
import './App.css'

function App() {
  
  // Aula de renderização condicional
  const [signed, setSigned] = useState(false)
  const [username, setUserName] = useState("Luciano")

  return (
   // exemplo 1
  // <div>
   // <button onClick={() => setSigned(true)}>Entrar</button>

   //    <br/><br/>

   //    {signed && (
   //      <div>
   //        <h1>Bem vindo Luciano</h1>
   //         <p>Usuario Online</p>
   //         <button onClick={() => setSigned(false)}>Sair</button>
   //       </div>
   //      )}
   //   </div>
   

   //exemplo 2

   
  //  <div>
    
  //   {username.length >= 5 && <h1>UserName Muito Grande</h1>}
   
  //  </div>
   // exemplo 3


   // se o signade tiver true o && no java spript é uma afirmação ou seja se signed for verdadeiro ou falso ele vai renderizar o q tiver apos o &&, apos o && eu posso adiicionar qualquer coisa uma div por exemplo
    
     <div>
        <button onClick={() => setSigned(true)}>Entrar</button>
       {signed && <h1>Bem luciano com o &&</h1>}
       <button onClick={() => setSigned(false)}>Sair</button>
    </div>
   

  ) 
  
}

export default App
