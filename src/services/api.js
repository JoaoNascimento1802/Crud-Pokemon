import axios from 'axios';

const API_URL = 'https://pokemon-brcjhebdfhdmacfs.brazilsouth-01.azurewebsites.net/pokemons';

export const listarPokemons = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const buscarPokemon = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const criarPokemon = async (pokemon) => {
  const payload = {
    nome: pokemon.nome,
    tipo: pokemon.tipo,
    numero: pokemon.numero,
    imagemUrl: pokemon.imagemUrl, 
  };

  const response = await axios.post(API_URL, payload);
  return response.data;
};

export const atualizarPokemon = async (id, pokemon) => {
  const params = {
    nome: pokemon.nome,
    tipo: pokemon.tipo,
    numero: pokemon.numero,
    imagemUrl: pokemon.imagemUrl,
  };

  const response = await axios.put(`${API_URL}/${id}`, null, { params }); 
  return response.data;
};

export const deletarPokemon = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};