import { useState, useEffect } from 'react';
import api from '../services/api';
import '../Crud.css'; // Importando CSS certinho

const Crud = () => {
  const [pokemons, setPokemons] = useState([]);
  const [form, setForm] = useState({ name: '', types: '', imageUrl: '' });

  const fetchPokemons = async () => {
    try {
      const response = await api.get('/');
      setPokemons(response.data);
    } catch (error) {
      console.error('Erro ao buscar pokémons', error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { ...form, types: form.types.split(',').map(t => t.trim()) });
      setForm({ name: '', types: '', imageUrl: '' });
      fetchPokemons();
    } catch (error) {
      console.error('Erro ao salvar pokémon', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/${id}`);
      fetchPokemons();
    } catch (error) {
      console.error('Erro ao deletar pokémon', error);
    }
  };

  return (
    <div className="crud-page">
      <div className="crud-container">
        <h1>CRUD Pokémon</h1>

        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Tipos (separados por vírgula)"
            value={form.types}
            onChange={(e) => setForm({ ...form, types: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL da imagem"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            required
          />
          <button type="submit" className="btn-primary">Cadastrar</button> {/* <-- estilizado certinho */}
        </form>

        <ul className="pokemon-list">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className="pokemon-card">
              <img src={pokemon.imageUrl} alt={pokemon.name} />
              <h2>{pokemon.name}</h2>
              <p>{pokemon.types.join(', ')}</p>
              <button onClick={() => handleDelete(pokemon.id)} className="btn-danger">Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
