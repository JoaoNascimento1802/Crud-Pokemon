import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/', { name, type, number, imageUrl });
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar Pokémon', error);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Cadastrar Pokémon</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="Tipo" 
          value={type} 
          onChange={(e) => setType(e.target.value)} 
          required
        />
        <input 
          type="number" 
          placeholder="Número" 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
          required
        />
        <input 
          type="text" 
          placeholder="URL da Imagem" 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)} 
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
