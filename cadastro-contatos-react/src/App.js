import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/menu/Menu';
import Rodape from './components/rodape/Rodape';
import ListaContatos from './pages/lista-contatos/ListaContatos';
import NovoContato from './pages/novo-contato/NovoContato';

function App() {
  return (
    <div className="container">
      <header>
        <h1>NAVA | Cadastro de Contatos</h1>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<ListaContatos />} />
          <Route path='/lista-contatos' element={<ListaContatos />} />
          <Route path='/novo-contato' element={<NovoContato />} />
        </Routes>
      </main>
      <footer>
        <Rodape />
      </footer>
    </div>
  );
}

export default App;
