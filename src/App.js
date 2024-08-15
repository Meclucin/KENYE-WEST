import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import axios from 'axios'; // Importa o axios para fazer requisições HTTP
import './App.css'; // Importa o arquivo de estilos CSS
import './index.css'; // Importa o arquivo de estilos CSS
import image from './imgs/123.jpg';

function App() { // Função principal do componente App
  const [quote, setQuote] = useState(''); // Estado para armazenar a citação; inicializado como uma string vazia
  const [loading, setLoading] = useState(false); // Estado para indicar se a citação está sendo carregada; inicializado como false
  const [error, setError] = useState(null); // Estado para armazenar erros; inicializado como null

  
  const fetchQuote = async () => {
    setLoading(true); // Define loading como true ao iniciar a busca
    try {         //Try é um if
      const response = await axios.get('https://api.kanye.rest'); // Faz uma requisição GET para a API
      setQuote(response.data.quote); // Atualiza o estado quote com a citação recebida
      setLoading(false); // Define loading como false após receber a resposta
    } catch (err) {   //Catch é um else
      setError(err); // Se ouver um erro ele retorna erro
      setLoading(false); // Define loading como false se houver um erro
    }
  };

  // Hook useEffect para chamar fetchQuote quando o componente for montado
  useEffect(() => {
    fetchQuote(); // Chama a função fetchQuote ao montar o componente
  }, []); // A lista de dependências está vazia, então a função é chamada apenas uma vez

  return (
    <div className="App"> {/* Container principal do componente */}
      <h1>Kanye West Frases Belissímas</h1> {/*Título do bicho veio*/}
      {loading && <p>Carregando...</p>} {/* Se for loading um comando verdadeiro ele vai carregar */}
      {error && <p>Erro: {error.message}</p>} {/* Se estiver errado ele vai retornar erro*/}
      {quote && <blockquote>{quote}</blockquote>} {/*  é uma string que armazena a citação recebida da API */}
    <p>Clique no Kenye West!!</p> {/* Frase acima da imagem do Kenye West */}
      <button onClick={fetchQuote}><img src ={image} alt="Kenye West" width={300} height={300}/></button> {/* Botão que chama fetchQuote ao ser clicado */}
    </div>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros arquivos

// TMJ PROFESSOR