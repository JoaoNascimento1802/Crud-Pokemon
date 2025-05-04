import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Crud from './pages/Crud'; 
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-light min-vh-100 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/crud" element={<Crud />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;