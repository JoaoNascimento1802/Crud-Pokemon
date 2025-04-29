import { useState, useEffect } from 'react';
import { listarPokemons, criarPokemon, deletarPokemon } from '../services/api'; 
import '../Crud.css'; // Importando CSS certinho

const Crud = () => {
  const [pokemons, setPokemons] = useState([]);
  const [form, setForm] = useState({ name: '', types: '', imageUrl: '', number: '' });

  const fetchPokemons = async () => {
    try {
      const data = await listarPokemons();
      setPokemons(data);
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
      const novoPokemon = {
        nome: form.name,
        tipo: form.types, 
        numero: parseInt(form.number, 10),
        imagemUrl: form.imageUrl
      };
      await criarPokemon(novoPokemon); 
      setForm({ name: '', types: '', imageUrl: '' });
      fetchPokemons();
    } catch (error) {
      console.error('Erro ao salvar pokémon', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletarPokemon(id); // Corrigido aqui
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
            placeholder="Tipo(s)"
            value={form.types}
            onChange={(e) => setForm({ ...form, types: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Número"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL da imagem"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            required
          />
          <button type="submit" className="btn-primary">Cadastrar</button>
        </form>

        <ul className="pokemon-list">
          {pokemons.map((pokemon) => (
            <li key={pokemon.id} className="pokemon-card">
              {pokemon.imagemUrl && (
              <img src={pokemon.imagemUrl} alt={pokemon.nome} />
            )}
              <h2>{pokemon.nome}</h2>
              <p>{pokemon.tipo}</p>
              <button onClick={() => handleDelete(pokemon.id)} className="btn-danger">Excluir</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crud;
