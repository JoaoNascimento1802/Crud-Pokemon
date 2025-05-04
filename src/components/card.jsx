function Card({ pokemon }) {
  return (
    <div className="card shadow border-0" style={{ width: '200px', background: '#fffbea' }}>
      <img
        src={pokemon.imagemUrl}
        className="card-img-top p-3"
        alt={pokemon.nome}
        style={{ height: '150px', objectFit: 'contain' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-primary">{pokemon.nome}</h5>
        <p className="card-text">Tipo: {pokemon.tipo}</p>
        <p className="card-text fw-bold">#{pokemon.numero}</p>
      </div>
    </div>
  );
}

export default Card;
