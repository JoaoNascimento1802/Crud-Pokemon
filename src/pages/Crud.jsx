import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { criarPokemon, atualizarPokemon } from '../services/api';

function Crud() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const pokemonEditado = state?.pokemon;

  const [form, setForm] = useState({
    nome: '',
    tipo: '',
    numero: '',
    imagemUrl: '',
    id: null
  });
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); 

  useEffect(() => {
    if (pokemonEditado) {
      setForm({
        nome: pokemonEditado.nome,
        tipo: pokemonEditado.tipo,
        numero: pokemonEditado.numero,
        imagemUrl: pokemonEditado.imagemUrl,
        id: pokemonEditado.id
      });
    } else {
      setForm({ nome: '', tipo: '', numero: '', imagemUrl: '', id: null });
    }
  }, [pokemonEditado]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem(''); 
    setTipoMensagem('');

    try {
      if (form.id) {
        await atualizarPokemon(form.id, form);
        setMensagem('Pokémon atualizado com sucesso!');
        setTipoMensagem('sucesso');
        setTimeout(() => navigate('/'), 1500); 
      } else {
        await criarPokemon(form);
        setMensagem('Pokémon cadastrado com sucesso!');
        setTipoMensagem('sucesso');
        setTimeout(() => navigate('/'), 1500); 
      }
    } catch (error) {
      console.error('Erro ao salvar Pokémon', error);
      setMensagem('Erro ao salvar o Pokémon.');
      setTipoMensagem('erro');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center text-danger mb-4">{form.id ? 'Editar Pokémon' : 'Cadastrar Pokémon'}</h2>
      <form className="mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <input
          className="form-control mb-3"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="tipo"
          placeholder="Tipo"
          value={form.tipo}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="numero"
          type="number"
          placeholder="Número"
          value={form.numero}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          name="imagemUrl"
          placeholder="URL da Imagem"
          value={form.imagemUrl}
          onChange={handleChange}
          required
        />
        <button className={`btn ${form.id ? 'btn-warning' : 'btn-danger'} w-100`}>
          {form.id ? 'Atualizar' : 'Cadastrar'}
        </button>

        {mensagem && (
          <div className={`mt-3 alert alert-${tipoMensagem === 'sucesso' ? 'success' : 'danger'}`} role="alert">
            {mensagem}
          </div>
        )}
      </form>
    </div>
  );
}

export default Crud;