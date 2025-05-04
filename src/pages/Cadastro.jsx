import { useState } from 'react';
import { criarPokemon } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [form, setForm] = useState({ nome: '', tipo: '', numero: '', imagemUrl: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarPokemon({ ...form, numero: parseInt(form.numero) });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-danger mb-4">Cadastrar Pokémon</h2>
      <form className="mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <input className="form-control mb-3" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
        <input className="form-control mb-3" name="tipo" placeholder="Tipo" value={form.tipo} onChange={handleChange} required />
        <input className="form-control mb-3" name="numero" type="number" placeholder="Número" value={form.numero} onChange={handleChange} required />
        <input className="form-control mb-3" name="imagemUrl" placeholder="URL da Imagem" value={form.imagemUrl} onChange={handleChange} required />
        <button className="btn btn-danger w-100">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;