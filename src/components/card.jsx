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
      <h3>{pokemon.name}</h3>
      <img 
        src={pokemon.imageUrl} 
        alt={pokemon.name} 
        style={{ width: '100px', height: '100px', objectFit: 'contain' }}
      />
      <p>Tipo: {pokemon.type}</p>
      <p># {pokemon.number}</p>
    </div>
  );
}

export default Card;
