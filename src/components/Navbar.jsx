import { Link } from 'react-router-dom';
import logo from '../images/pokemon.png'; // importando a logo


function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: 'white' }}> {/* Cor do header alterada para branco */}
      <div className="navbar-container">
        <img src={logo} alt="Pokemon Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/" className="nav-button">Home</Link></li> {/* Adicionada classe nav-button */}
          <li><Link to="/cadastro" className="nav-button">Cadastrar Pokémon</Link></li> {/* Adicionada classe nav-button */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;