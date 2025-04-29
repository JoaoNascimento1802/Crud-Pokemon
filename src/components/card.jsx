import React from 'react';

function Card({ pokemon }) {
  return (
    <div style={{
      backgroundColor: '#eee',
      borderRadius: '10px',
      padding: '1rem',
      textAlign: 'center',
      width: '180px',
      margin: '10px'
    }}>
      <h3>{pokemon.nome}</h3>
      <img 
        src={pokemon.imagemUrl}
        alt={pokemon.nome} 
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <p>Tipo: {pokemon.tipo}</p>
      <p># {pokemon.numero}</p>
    </div>
  );
}

export default Card;
