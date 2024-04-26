import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarExample from "./components/layout/NavbarExample";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Container } from 'react-bootstrap';
import Edit from './components/pages/Edit';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <NavbarExample />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user-detail/:id' element={<Edit />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
