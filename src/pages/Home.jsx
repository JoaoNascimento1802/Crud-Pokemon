import React, { useEffect, useState } from 'react';
import { listarPokemons } from '../services/api'; 
import Card from '../components/card';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const data = await listarPokemons(); 
      setPokemons(data);
    } catch (error) {
      console.error('Erro ao buscar Pokémons', error);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Pokédex</h1>
      <Link to="/cadastro">
        <button style={{
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
        >
          Cadastrar Novo Pokémon
        </button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pokemons.map(pokemon => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;
