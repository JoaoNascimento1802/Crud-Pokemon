import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/pokemons', // <-- ajuste para o seu backend
});

export default api;
