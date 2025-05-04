import { Link } from 'react-router-dom';

function Card({ pokemon }) {
  return (
    <div className="card shadow border-0 m-2" style={{ width: '200px', background: '#fffbea' }}>
      <img
        src={pokemon.imagemUrl}
        className="card-img-top p-3"
        alt={pokemon.nome}
        style={{ height: '170px', objectFit: 'contain' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title text-primary mb-1">{pokemon.nome}</h5>
        <p className="card-text small text-muted mb-0">Tipo: <span className="fw-bold text-dark">{pokemon.tipo}</span></p>
        <p className="card-text fw-bold text-secondary">#{pokemon.numero}</p>
        <Link
          to="/crud"
          state={{ pokemon }}
          className="btn btn-warning btn-sm me-2 mt-2"
        >
          Editar
        </Link>
        <button className="btn btn-danger btn-sm mt-2">Excluir</button>
      </div>
    </div>
  );
}

export default Card;