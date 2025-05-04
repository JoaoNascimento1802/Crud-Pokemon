import React, { useEffect, useState } from 'react';
import { listarPokemons, deletarPokemon } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'sucesso' ou 'erro'

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const data = await listarPokemons();
      setPokemons(data);
    } catch (error) {
      console.error('Erro ao buscar Pokémons', error);
      setMensagem('Erro ao buscar os Pokémons.');
      setTipoMensagem('erro');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este Pokémon?')) {
      try {
        await deletarPokemon(id);
        fetchPokemons(); // Atualiza a lista
        setMensagem('Pokémon excluído com sucesso!');
        setTipoMensagem('sucesso');
        setTimeout(() => setMensagem(''), 3000); // Limpa a mensagem após 3 segundos
      } catch (error) {
        console.error('Erro ao excluir Pokémon', error);
        setMensagem('Erro ao excluir o Pokémon.');
        setTipoMensagem('erro');
        setTimeout(() => setMensagem(''), 3000);
      }
    }
  };

  const handleEdit = (pokemon) => {
    navigate('/crud', { state: { pokemon } });
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
          fontWeight: 'bold'
        }}>
          Cadastrar Novo Pokémon
        </button>
      </Link>

      {mensagem && (
        <div className={`mt-3 alert alert-${tipoMensagem === 'sucesso' ? 'success' : 'danger'}`} role="alert">
          {mensagem}
        </div>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {pokemons.map(pokemon => (
          <div key={pokemon.id} style={{
            backgroundColor: '#f7f7f7',
            borderRadius: '10px',
            padding: '1rem',
            width: '220px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <img
              src={pokemon.imagemUrl}
              alt={pokemon.nome}
              style={{ width: '100%', height: '150px', objectFit: 'contain', borderRadius: '10px' }}
            />
            <h3>{pokemon.nome}</h3>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Número: {pokemon.numero}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
              <button
                onClick={() => handleEdit(pokemon)}
                style={{
                  backgroundColor: '#f0ad4e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  flex: 1,
                  marginRight: '5px'
                }}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(pokemon.id)}
                style={{
                  backgroundColor: '#d9534f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;