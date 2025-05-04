import { useEffect, useState } from 'react';
import { listarPokemons } from '../services/api';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    listarPokemons().then(setPokemons).catch(console.error);
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-danger fw-bold mb-4">Pokédex</h1>
      <Link to="/cadastro" className="btn btn-danger mb-4 shadow">
        Cadastrar Novo Pokémon
      </Link>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;
