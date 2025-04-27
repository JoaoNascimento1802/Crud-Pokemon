import React, { useState } from 'react';
import api from '../services/api';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import './index.css'; // Garanta que o index.css está importado

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [overlayActive, setOverlayActive] = useState(false);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await api.get('/');
      setPokemons(response.data);
    } catch (error) {
      console.error('Erro ao buscar Pokémons', error);
    }
  };

  const handleCadastrarClick = () => {
    setOverlayActive(true);
    // Opcionalmente, você pode adicionar um setTimeout para remover o overlay
    // após um curto período, ou removê-lo quando a página de cadastro for carregada.
    setTimeout(() => {
      setOverlayActive(false);
      // Redirecionar para a página de cadastro
      window.location.href = '/cadastro'; // Ou use navigate('/cadastro') se tiver acesso ao useNavigate
    }, 500); // Tempo em milissegundos que o overlay ficará visível
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Pokédex</h1>
      <button
        style={{
          marginBottom: '2rem',
          backgroundColor: '#cc0000',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#a30000'}
        onMouseOut={e => e.target.style.backgroundColor = '#cc0000'}
        onClick={handleCadastrarClick} // Adicione o evento de clique
      >
        Cadastrar Novo Pokémon
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Overlay */}
      <div className={`overlay ${overlayActive ? 'active' : ''}`}>
        {/* Opcionalmente, adicione conteúdo ao overlay */}
        {/* <div className="overlay-content">Carregando...</div> */}
      </div>
    </div>
  );
}

export default Home;