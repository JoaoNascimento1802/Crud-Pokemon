// Exemplo em App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Navbar from './components/Navbar';
import Crud from './pages/Crud';
import './index.css'; // <--- Verifique se esta linha existe


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;