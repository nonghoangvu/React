import { Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import NewPage from './pages/New';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/news'>New</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/news' element={<NewPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
