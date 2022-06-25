import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api.js'

function App() {

  const [input, setInput] = useState('') 
  const [cep, setCep] = useState({});

  async function handleSearch(){
    //01310930/json

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput("");
    }catch{
      alert("Ops erro ao buscar ")
      setInput("")
    }
  }


  return (
    <div className="container">
      <h1 className="title">Buscasdor de CEP</h1>

      <div className="containerInput">
        <input 
        type="text" 
        placeholder="Digite seu cep..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 &&(
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>

          <span>{cep.logradouro}</span>

          <span>{cep.bairro}</span>

          <span>{cep.localidade} - {cep.uf}</span>

      </main>
      )} 

      <footer className='footer'>
      <span class="footer__copy">
                &#169; Desenvolvido por Jhonatan Serafim | DevSerafim. Todos os direitos reservados.
            </span>
      </footer>     

    </div>
  );
}

export default App;
